class Api::SpotsController < ApplicationController

  def index
    @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    render :index
  end

  def create
    @spot = Spot.create(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def show
    @spot = Spot.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end

  private

  def spot_params
    params.require(:spot).permit(:host_id, :title, :address, :body, :guests, :price, :bedrooms, :beds, :lng, :lat, :bathrooms, :spot_type, :image)
  end

  def bounds
    params[:bounds]
  end

end
