class Api::BookingsController < ApplicationController

  def create
    @booking = current_user.bookings.create(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = Booking.where("spot_id = ?", params[:spot_id])
    render :index
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    @booking.destroy
    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :booker_id, :spot_id)
  end
end
