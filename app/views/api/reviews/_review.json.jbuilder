author = review.author
spot = review.spot

json.extract! review, :id, :title, :body, :rating

json.author do
  json.extract! author, :id, :first_name, :last_name
end

json.spot do
  json.extract! spot, :id
end
