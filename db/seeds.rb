User.destroy_all
Spot.destroy_all
Review.destroy_all
Booking.destroy_all
Amenity.destroy_all
SpotAmenity.destroy_all

user1 = User.create!(email: 'ross@hotmail.com', password: 'whatever', first_name: 'Ross', last_name: 'McArthur')
user2 = User.create!(email: 'virginias_v_best@gmail.com', password: 'whatever', first_name: 'George', last_name: 'Washington')
guest = User.create!(email: 'guest123@gmail.com', password: 'guestpassword')

amenity1 = Amenity.create!(amenity_type: "Wifi")
amenity2 = Amenity.create!(amenity_type: "Air Conditioning")
amenity3 = Amenity.create!(amenity_type: "Kitchen")
amenity4 = Amenity.create!(amenity_type: "Family/Kid Friendly")
amenity5 = Amenity.create!(amenity_type: "Cable TV")

spot1 = Spot.create!(host_id: user2.id, title: "Great Spot", address: '1372 Broadway, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.",
    spot_type: "Private Room", guests: 3, price: 75, lng: -73.979877, lat: 40.777918, bedrooms: 1, bathrooms: 1, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment1.jpeg")
spot2 = Spot.create!(host_id: user1.id, title: "Okay Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 90, lng: -73.957867, lat: 40.765109, bedrooms: 2, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment2.jpeg")
spot3 = Spot.create!(host_id: user1.id, title: "Bad Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 80, lng: -73.991073, lat: 40.7522534, bedrooms: 3, bathrooms: 1, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment3.jpeg")
spot4 = Spot.create!(host_id: user1.id, title: "Wonderful Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 70, lng: -79.397874, lat: 43.657457, bedrooms: 2, bathrooms: 2, beds: 1, image: "https://s3.amazonaws.com/xenia-seeds/apartment4.jpeg")
spot5 = Spot.create!(host_id: user1.id, title: "Terrible Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 100, lng: -79.410468, lat: 43.656345, bedrooms: 1, bathrooms: 2, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment5.jpeg")
spot6 = Spot.create!(host_id: user1.id, title: "Whatever Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 120, lng: -79.403129, lat: 43.669291, bedrooms: 2, bathrooms: 2, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment6.jpeg")
spot7 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.595922, lat: 45.483386, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment7.jpeg")
spot8 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.615492, lat: 45.469942, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment8.jpeg")
spot9 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.978458, lat: 40.662935, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment9.jpeg")
spot10 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.949626, lat: 40.728793, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment10.jpeg")
spot11 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.928168, lat: 40.763777, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment11.jpeg")
spot12 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -122.419498, lat: 37.796761, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment12.jpeg")
spot13 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -122.449625, lat: 37.778515, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment13.jpeg")
spot14 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -122.461555, lat: 37.779193, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment14.jpeg")
spot15 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -122.393835, lat: 37.778922, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment15.jpeg")
spot16 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -122.427910, lat: 37.801712, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment16.jpeg")
spot17 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -83.042417, lat: 42.362518, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment17.jpeg")
spo18 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -83.124643, lat: 42.326866, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment18.jpeg")
spot19 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -83.189188, lat: 42.350848, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment19.jpeg")
spot20 = Spot.create!(host_id: user1.id, title: "Scary Spot", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.993850, lat: 40.724013, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment20.jpeg")

spot1_amenities1 = SpotAmenity.create!(spot_id: spot1.id, amenity_id: amenity1.id)
spot1_amenities2 = SpotAmenity.create!(spot_id: spot1.id, amenity_id: amenity3.id)
spot2_amenities1 = SpotAmenity.create!(spot_id: spot2.id, amenity_id: amenity2.id)
spot2_amenities2 = SpotAmenity.create!(spot_id: spot2.id, amenity_id: amenity5.id)
spot3_amenities1 = SpotAmenity.create!(spot_id: spot3.id, amenity_id: amenity3.id)
spot3_amenities2 = SpotAmenity.create!(spot_id: spot3.id, amenity_id: amenity4.id)
spot3_amenities3 = SpotAmenity.create!(spot_id: spot3.id, amenity_id: amenity1.id)
spot3_amenities4 = SpotAmenity.create!(spot_id: spot3.id, amenity_id: amenity5.id)
spot4_amenities1 = SpotAmenity.create!(spot_id: spot4.id, amenity_id: amenity1.id)
spot4_amenities2 = SpotAmenity.create!(spot_id: spot4.id, amenity_id: amenity2.id)
spot4_amenities3 = SpotAmenity.create!(spot_id: spot4.id, amenity_id: amenity3.id)
spot5_amenities1 = SpotAmenity.create!(spot_id: spot5.id, amenity_id: amenity1.id)
spot5_amenities2 = SpotAmenity.create!(spot_id: spot5.id, amenity_id: amenity4.id)
spot6_amenities1 = SpotAmenity.create!(spot_id: spot6.id, amenity_id: amenity2.id)
spot7_amenities1 = SpotAmenity.create!(spot_id: spot7.id, amenity_id: amenity3.id)
spot7_amenities2 = SpotAmenity.create!(spot_id: spot7.id, amenity_id: amenity1.id)
spot7_amenities3 = SpotAmenity.create!(spot_id: spot7.id, amenity_id: amenity5.id)
spot8_amenities1 = SpotAmenity.create!(spot_id: spot8.id, amenity_id: amenity1.id)
spot8_amenities2 = SpotAmenity.create!(spot_id: spot8.id, amenity_id: amenity3.id)
spot8_amenities3 = SpotAmenity.create!(spot_id: spot8.id, amenity_id: amenity2.id)
spot8_amenities4 = SpotAmenity.create!(spot_id: spot8.id, amenity_id: amenity5.id)
spot9_amenities1 = SpotAmenity.create!(spot_id: spot9.id, amenity_id: amenity5.id)
spot9_amenities2 = SpotAmenity.create!(spot_id: spot9.id, amenity_id: amenity2.id)
spot10_amenities1 = SpotAmenity.create!(spot_id: spot10.id, amenity_id: amenity1.id)
spot10_amenities2 = SpotAmenity.create!(spot_id: spot10.id, amenity_id: amenity2.id)
spot10_amenities3 = SpotAmenity.create!(spot_id: spot10.id, amenity_id: amenity3.id)
spot11_amenities1 = SpotAmenity.create!(spot_id: spot11.id, amenity_id: amenity4.id)
spot11_amenities2 = SpotAmenity.create!(spot_id: spot11.id, amenity_id: amenity2.id)
spot12_amenities1 = SpotAmenity.create!(spot_id: spot12.id, amenity_id: amenity1.id)
spot12_amenities2 = SpotAmenity.create!(spot_id: spot12.id, amenity_id: amenity4.id)
spot12_amenities3 = SpotAmenity.create!(spot_id: spot12.id, amenity_id: amenity2.id)
spot13_amenities1 = SpotAmenity.create!(spot_id: spot13.id, amenity_id: amenity3.id)
spot13_amenities2 = SpotAmenity.create!(spot_id: spot13.id, amenity_id: amenity1.id)
spot14_amenities1 = SpotAmenity.create!(spot_id: spot14.id, amenity_id: amenity3.id)
spot14_amenities2 = SpotAmenity.create!(spot_id: spot14.id, amenity_id: amenity4.id)
spot14_amenities3 = SpotAmenity.create!(spot_id: spot14.id, amenity_id: amenity5.id)
spot15_amenities1 = SpotAmenity.create!(spot_id: spot15.id, amenity_id: amenity1.id)
spot15_amenities2 = SpotAmenity.create!(spot_id: spot15.id, amenity_id: amenity2.id)
spot16_amenities1 = SpotAmenity.create!(spot_id: spot16.id, amenity_id: amenity2.id)
spot16_amenities2 = SpotAmenity.create!(spot_id: spot16.id, amenity_id: amenity4.id)
spot16_amenities1 = SpotAmenity.create!(spot_id: spot16.id, amenity_id: amenity5.id)
spot17_amenities1 = SpotAmenity.create!(spot_id: spot17.id, amenity_id: amenity2.id)
spot18_amenities1 = SpotAmenity.create!(spot_id: spot18.id, amenity_id: amenity1.id)
spot18_amenities2 = SpotAmenity.create!(spot_id: spot18.id, amenity_id: amenity2.id)
spot18_amenities3 = SpotAmenity.create!(spot_id: spot18.id, amenity_id: amenity3.id)
spot19_amenities1 = SpotAmenity.create!(spot_id: spot19.id, amenity_id: amenity4.id)
spot20_amenities1 = SpotAmenity.create!(spot_id: spot20.id, amenity_id: amenity1.id)
spot20_amenities2 = SpotAmenity.create!(spot_id: spot20.id, amenity_id: amenity4.id)
spot20_amenities3 = SpotAmenity.create!(spot_id: spot20.id, amenity_id: amenity5.id)


review1 = Review.create!(title: "Good Review", body: "What a good spot!", rating: 5, spot_id: spot4.id, author_id: user1.id)
review2 = Review.create!(title: "Bad Review", body: "What a good spot!", rating: 3, spot_id: spot2.id, author_id: user2.id)
review3 = Review.create!(title: "Okay Review", body: "What a good spot!", rating: 1, spot_id: spot1.id, author_id: user1.id)
review4 = Review.create!(title: "Terrible Review", body: "What a good spot!", rating: 5, spot_id: spot3.id, author_id: user2.id)
review5 = Review.create!(title: "Crap Review", body: "What a good spot!", rating: 2, spot_id: spot5.id, author_id: user1.id)
review6 = Review.create!(title: "Amazing Review", body: "What a good spot!", rating: 4, spot_id: spot6.id, author_id: user2.id)
review7 = Review.create!(title: "Incredible Review", body: "What a good spot!", rating: 2, spot_id: spot7.id, author_id: user1.id)
review8 = Review.create!(title: "What a Review", body: "What a good spot!", rating: 3, spot_id: spot1.id, author_id: user2.id)
review9 = Review.create!(title: "Worst Review", body: "What a good spot!", rating: 3, spot_id: spot1.id, author_id: user1.id)
review10 = Review.create!(title: "Best Review", body: "What a good spot!", rating: 5, spot_id: spot2.id, author_id: user2.id)
review11 = Review.create!(title: "Meh Review", body: "What a good spot!", rating: 1, spot_id: spot2.id, author_id: user1.id)
review12 = Review.create!(title: "Crazy Review", body: "What a good spot!", rating: 2, spot_id: spot3.id, author_id: user2.id)
review13 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 2, spot_id: spot4.id, author_id: user1.id)
review14 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 5, spot_id: spot8.id, author_id: user1.id)
review15 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 4, spot_id: spot9.id, author_id: user1.id)
review16 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 3, spot_id: spot10.id, author_id: user1.id)
review17 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 4, spot_id: spot11.id, author_id: user1.id)
review18 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 2, spot_id: spot12.id, author_id: user1.id)
review19 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 1, spot_id: spot13.id, author_id: user1.id)
review20 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 5, spot_id: spot14.id, author_id: user1.id)
review21 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 2, spot_id: spot15.id, author_id: user1.id)
review22 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 3, spot_id: spot16.id, author_id: user1.id)
review23 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 3, spot_id: spot17.id, author_id: user1.id)
review24 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 4, spot_id: spot18.id, author_id: user1.id)
review25 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 4, spot_id: spot19.id, author_id: user1.id)
review26 = Review.create!(title: "Never Review", body: "What a good spot!", rating: 1, spot_id: spot20.id, author_id: user1.id)

booking1 = Booking.create!(start_date: Date.today, end_date: Date.new(2018, 2, 3), spot_id: spot1.id, booker_id: guest.id)
booking2 = Booking.create!(start_date: Date.today, end_date: Date.new(2018, 4, 3), spot_id: spot2.id, booker_id: user2.id)
booking3 = Booking.create!(start_date: Date.today, end_date: Date.new(2018, 5, 6), spot_id: spot3.id, booker_id: guest.id)
