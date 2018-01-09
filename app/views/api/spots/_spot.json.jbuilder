json.extract! spot, :id, :title, :body, :price, :spot_type, :average_rating, :lat, :lng, :amenities
json.image_url asset_path(spot.image.url)
