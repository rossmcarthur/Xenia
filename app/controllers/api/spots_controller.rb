class Api::SpotsController < ApplicationController

  def index
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status:422 
    end
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def update
  end

  def destroy
  end

  private

  def spot_params
    params.require(:spot).permit(:host_id, :title, :address, :body, :guests, :price, :lng, :lat)
  end
end
