# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.destroy_all
Review.destroy_all
Booking.destroy_all

user1 = User.create(email: 'ross@hotmail.com', password: 'whatever', first_name: 'Ross', last_name: 'McArthur')
user2 = User.create(email: 'virginias_v_best@gmail.com', password: 'whatever', first_name: 'George', last_name: 'Washington')
guest = User.create(email: 'guest123@gmail.com', password: 'guestpassword')

spot1 = Spot.create(host_id: user2.id, title: "Great Spot", address: '1372 Broadway, New York, New York, 10018, United States',
  body: "A really great spot with a great location", spot_type: "Private Room", guests: 3, price: 75, lng: -73.9891765, lat: 40.7522534)
spot2 = Spot.create(host_id: user1.id, title: "Okay Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Only okay", spot_type: "Shared Room", guests: 2, price: 100, lng: -73.991073, lat: 40.7522534)
spot3 = Spot.create(host_id: user1.id, title: "Bad Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Pretty bad spot", spot_type: "Shared Room", guests: 2, price: 100, lng: -73.991073, lat: 40.7522534)
spot4 = Spot.create(host_id: user1.id, title: "Wonderful Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "What a wonderful spot", spot_type: "Shared Room", guests: 2, price: 100, lng: -73.991073, lat: 40.7522534)
spot5 = Spot.create(host_id: user1.id, title: "Terrible Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Worst spot ever", spot_type: "Shared Room", guests: 2, price: 100, lng: -73.991073, lat: 40.7522534)
spot6 = Spot.create(host_id: user1.id, title: "Whatever Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "meh", spot_type: "Shared Room", guests: 2, price: 100, lng: -73.991073, lat: 40.7522534)
spot7 = Spot.create(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Too scary", spot_type: "Shared Room", guests: 2, price: 100, lng: -73.991073, lat: 40.7522534)

review1 = Review.create(title: "Good Review", body: "What a good spot!", rating: 5, spot_id: spot4.id, author_id: user1.id)
review2 = Review.create(title: "Bad Review", body: "What a good spot!", rating: 3, spot_id: spot2.id, author_id: user2.id)
review3 = Review.create(title: "Okay Review", body: "What a good spot!", rating: 1, spot_id: spot1.id, author_id: user1.id)
review4 = Review.create(title: "Terrible Review", body: "What a good spot!", rating: 5, spot_id: spot3.id, author_id: user2.id)
review5 = Review.create(title: "Crap Review", body: "What a good spot!", rating: 2, spot_id: spot5.id, author_id: user1.id)
review6 = Review.create(title: "Amazing Review", body: "What a good spot!", rating: 4, spot_id: spot6.id, author_id: user2.id)
review7 = Review.create(title: "Incredible Review", body: "What a good spot!", rating: 2, spot_id: spot7.id, author_id: user1.id)
review8 = Review.create(title: "What a Review", body: "What a good spot!", rating: 3, spot_id: spot1.id, author_id: user2.id)
review9 = Review.create(title: "Worst Review", body: "What a good spot!", rating: 3, spot_id: spot1.id, author_id: user1.id)
review10 = Review.create(title: "Best Review", body: "What a good spot!", rating: 5, spot_id: spot2.id, author_id: user2.id)
review11 = Review.create(title: "Meh Review", body: "What a good spot!", rating: 1, spot_id: spot2.id, author_id: user1.id)
review12 = Review.create(title: "Crazy Review", body: "What a good spot!", rating: 2, spot_id: spot3.id, author_id: user2.id)
review13 = Review.create(title: "Never Review", body: "What a good spot!", rating: 2, spot_id: spot4.id, author_id: user1.id)

booking1 = Booking.create(start_date: Date.today, end_date: Date.new(2018, 2, 3), spot_id: spot1.id, booker_id: guest.id)
booking2 = Booking.create(start_date: Date.today, end_date: Date.new(2018, 4, 3), spot_id: spot2.id, booker_id: user2.id)
booking3 = Booking.create(start_date: Date.today, end_date: Date.new(2018, 5, 6), spot_id: spot3.id, booker_id: guest.id)
