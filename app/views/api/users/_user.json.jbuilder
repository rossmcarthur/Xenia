json.extract! user, :id, :email, :first_name, :last_name, :reviews, :bookings, :spots

json.image_url asset_path user.image.url
