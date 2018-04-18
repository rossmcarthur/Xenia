spot = booking.spot
host = booking.spot.host

json.extract! booking, :id, :start_date, :end_date, :cost, :booker_id

json.spot do
  json.extract! spot, :id, :title, :price, :address, :guests, :spot_type
  json.spot_image_url spot.image.url
end

json.host do
  json.host_image_url host.image.url
end
