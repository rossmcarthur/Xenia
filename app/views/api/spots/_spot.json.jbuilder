json.extract! spot, :id, :title, :body, :price, :spot_type, :lat, :lng
json.image_url asset_path(spot.image.url)
