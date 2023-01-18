class PropertiesController < ApplicationController
  before_action :set_property, only: %i[ show update destroy ]

  # GET /properties
  def index
    @properties = Property.all

    render json: @properties
  end

  # GET /properties/1
  def show
    render json: @property
  end

  # POST /properties
  def create
    @property = Property.new(property_params)

    if @property.save
      render json: @property, status: :created, location: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end

  def owned_by
    @properties_owned = properties_ownedby    
    unless @properties_owned
      render json: [], status: :not_found
    else
      render json: @properties_owned, status: :ok
    end

  end

  def owned_by_for_sale
    @properties_owned_undersale = properties_ownedby_for_sale    
    unless  @properties_owned_undersale
      render json: [], status: :not_found
    else
      render json: @properties_owned_undersale, status: :ok
    end
  end

  def properties_all_for_sale
    for_sale_properties = properties_for_sale
    p for_sale_properties
    
    if for_sale_properties.blank?
      render json: [], status: :not_found
    else
      render json: for_sale_properties, status: :ok
    end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    def properties_for_sale 
      Property.where(for_sale: true)
    end

    def properties_ownedby            
      Property.where(seller_id: params[:sid])
    end

    def properties_ownedby_for_sale            
      Property.where(seller_id: params[:sid], for_sale: true)
    end

    # Only allow a list of trusted parameters through.
    def property_params
      params.require(:property).permit(:type_id, :address, :location_id, :beds, :baths, :size, :image_url, :notes, :for_sale, :price, :seller_id, :description, :sid)
    end
end
