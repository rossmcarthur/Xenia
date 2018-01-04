# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(email: 'ross@hotmail.com', password: 'whatever', first_name: 'Ross', last_name: 'McArthur')
user2 = User.create(email: 'virginias_v_best@gmail.com', password: 'whatever', first_name: 'George', last_name: 'Washington')

spot1 = Spot.create(host_id: user2.id, title: "Great Spot", address: '1372 Broadway, New York, New York, 10018, United States',
  body: "A really great spot with a great location", guests: 3, price: 75, lng: 40.7522534, lat: -73.9891765)
spot2 = Spot.create(host_id: user1.id, title: "Okay Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "A really great spot with a great location", guests: 2, price: 100, lng: 40.754467, lat: -73.991073)
