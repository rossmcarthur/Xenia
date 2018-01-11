json.extract! spot, :id, :title, :body, :price, :spot_type, :average_rating, :guests, :bedrooms, :bathrooms, :beds, :lat, :lng, :amenities, :bookings
json.image_url asset_path(spot.image.url)
