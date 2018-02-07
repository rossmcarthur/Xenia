json.extract! user, :id, :email, :reviews, :bookings, :spots
json.image_url asset_path(user.image.url)
