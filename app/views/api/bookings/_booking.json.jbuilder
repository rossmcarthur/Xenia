spot = booking.spot

json.extract! booking, :id, :start_date, :end_date, :cost

json.spot do
<<<<<<< HEAD
  json.extract! spot, :id, :title, :price, :address, :guests, :spot_type\
=======
  json.extract! spot, :id, :title, :price, :address, :guests, :spot_type, :bookings
>>>>>>> spot-create
end
