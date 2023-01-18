class PropertyImagesController < ApplicationController
  before_action :set_property_image, only: %i[ show update destroy ]

  # GET /property_images
  def index
    @property_images = PropertyImage.all
    
    

    render json: @property_images
  end

  # GET /property_images/1
  def show
    render json: @property_image
  end

  # POST /property_images
  def create
    @property_image = PropertyImage.new(property_image_params)

    if @property_image.save
      render json: @property_image, status: :created, location: @property_image
    else
      render json: @property_image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /property_images/1
  def update
    if @property_image.update(property_image_params)
      render json: @property_image
    else
      render json: @property_image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /property_images/1
  def destroy
    @property_image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property_image
      @property_image = PropertyImage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def property_image_params
      params.require(:property_image).permit(:property_id, :image_url)
    end
end
