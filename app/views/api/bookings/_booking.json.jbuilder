spot = booking.spot

json.extract! booking, :id, :start_date, :end_date, :cost, :booker_id

json.spot do
  json.extract! spot, :id, :title, :price, :address, :guests, :spot_type, :bookings
end
