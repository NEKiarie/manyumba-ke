class ListedPropertiesController < ApplicationController
  before_action :set_listed_property, only: %i[ show update destroy ]

  # GET /listed_properties
  def index
    @listed_properties = ListedProperty.all

    render json: @listed_properties
  end

  # GET /listed_properties/1
  def show
    render json: @listed_property
  end

  # POST /listed_properties
  def create
    @listed_property = ListedProperty.new(listed_property_params)

    if @listed_property.save
      render json: @listed_property, status: :created, location: @listed_property
    else
      render json: @listed_property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listed_properties/1
  def update
    if @listed_property.update(listed_property_params)
      render json: @listed_property
    else
      render json: @listed_property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listed_properties/1
  def destroy
    @listed_property.destroy
  end

  def owned_by
    properties_owned = properties_ownedby    
    unless  properties_owned
      render json: [], status: :not_found
    else
      render json: properties_owned, status: :ok
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listed_property
      @listed_property = ListedProperty.find(params[:id])
    end

    def properties_ownedby            
      ListedProperty.where(seller_id: params[:sid])
    end

    # Only allow a list of trusted parameters through.
    def listed_property_params
      params.require(:listed_property).permit(:property_id, :seller_id, :is_sold,:sid)
    end
end
