class Api::SpotAmenitiesController < ApplicationController
  def create
    @spot_amenity = Spot_Amenity.create(spot_amenity_params)
      if @spot_amenity.save
        render :show
      else
        render json: @spot_amenity.errors.full_messages, status: 422
      end
  end

  private

  def spot_amenity_params
    params.require(:spot_amenity).permit(:spot_id, :amenity_id)
  end

end
