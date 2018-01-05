author = review.author

json.extract! review, :id, :title, :body, :rating

json.author do
  json.extract! author, :first_name, :last_name
end
