author = review.author
spot = review.spot

json.extract! review, :id, :body, :rating, :created_at

json.author do
  json.extract! author, :id, :first_name
  json.image_url author.image.url
end

json.spot do
  json.extract! spot, :id, :reviews
end
