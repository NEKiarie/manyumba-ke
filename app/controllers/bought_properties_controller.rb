class BoughtPropertiesController < ApplicationController
  before_action :set_bought_property, only: %i[ show update destroy ]

  # GET /bought_properties
  def index
    @bought_properties = BoughtProperty.all

    render json: @bought_properties
  end

  # GET /bought_properties/1
  def show
    render json: @bought_property
  end

  # POST /bought_properties
  def create
    @bought_property = BoughtProperty.new(bought_property_params)

    if @bought_property.save
      render json: @bought_property, status: :created, location: @bought_property
    else
      render json: @bought_property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bought_properties/1
  def update
    if @bought_property.update(bought_property_params)
      render json: @bought_property
    else
      render json: @bought_property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bought_properties/1
  def destroy
    @bought_property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bought_property
      @bought_property = BoughtProperty.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bought_property_params
      params.require(:bought_property).permit(:seller_id, :buyer_id, :property_id)
    end
end
