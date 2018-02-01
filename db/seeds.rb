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

spot1 = Spot.create!(host_id: user2.id, title: "Artist's Loft", address: '1372 Broadway, New York, New York, 10018, United States',
  body: "Cozy, warm atmosphere, perfect for the traveler looking for a real NY experience.This reservation is for one person.If you want to book for 2 guests it is an extra $100 per night.
   Best neighborhood in midtown Manhattan for the best price. In the hub of Hell's Kitchen nightlife, restaurants, theaters, museums. This is a smoking apartment.",
    spot_type: "Private Room", guests: 3, price: 75, lng: -73.979877, lat: 40.777918, bedrooms: 1, bathrooms: 1, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment1.jpeg")
spot2 = Spot.create!(host_id: user1.id, title: "Sunny Gem with Balcony!", address: '262 W 130th St, New York, New York, 10018, United States',
  body: "A stunning private suite in a 1800's Brownstone featured in the New York Times Home Section!
   This room has exceptional design features, luxury amenities, brand new bathroom and totally renovated with historical flair.
   Situated in a modern elevator building only one block from the subway and in the best area for nightlife in NYC", spot_type: "Shared Room", guests: 2, price: 90, lng: -73.957867, lat: 40.765109, bedrooms: 2, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment2.jpeg")
spot3 = Spot.create!(host_id: user1.id, title: "Full size bed, steps to subway. Perfect location!", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "My space is a comfortable and calm escape from the Craziness that is New York City.
I want you to feel at home while staying with me. I also have my energy supplied from an all green company
so you can feel good knowing your stay here is not contributing to any additional pollution or harm to the earth :)
**NOTE: this room is small, large luggages can fit but I recommend this room for shorter stays.
 Every guest that books for more than a week asks me to switch to the larger room.
The larger room is more expensive but if you have a longer stay I recommend booking the other room as there is no switching.
It will be booked by the time you arrive, trust me.**", spot_type: "Shared Apartment", guests: 2, price: 80, lng: -73.991073, lat: 40.7522534, bedrooms: 3, bathrooms: 1, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment3.jpeg")
spot4 = Spot.create!(host_id: user1.id, title: "Bright, Modern Room", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Big Bedroom available in a 2BR apt in prime location.
The apartment is brand new and has access to a private rooftop deck!
Your room includes: full-size bed, individual couchbed/daybed, storage,
new dishwasher, refrigerator, kitchen appliances, and bathroom.
Includes ceiling fan in the room, toiletries, linen.
Close to major Subway Lines and MTA Bus Lines. Plenty of restaurants, shops, and activities around.", spot_type: "Single Room", guests: 2, price: 70, lng: -79.397874, lat: 43.657457, bedrooms: 2, bathrooms: 2, beds: 1, image: "https://s3.amazonaws.com/xenia-seeds/apartment4.jpeg")
spot5 = Spot.create!(host_id: user1.id, title: "Cozy 1 Bedroom Apt", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "I have one room in my two-bedroom, cozy and furnished apartment available to a reliable, tidy person. Your stay must be a minimum of 4 nights.
  We can work out a deal for long-term, which would also require a fully refundable deposit.
  1 bedroom available in my 2 bedroom flat for 1 person, no couples. There is a clean, tiled bathroom, a large eat-in kitchen.
  Wireless internet is included. The room is quiet and cozy.
  It is furnished with a bed, night stand, selves, closet, table and chair. I keep my home very clean and tidy and appreciate the same from my guests.
  My place is very quiet and has nice light. You can hear birds chirping in the morning.
  It also has a beautifully manicure backyard. There's a window that gives onto the kitchen from the room.
  The room is very sound isolated regardless and gets great light from morning into the early afternoon.
  It's a charming architectural feature. Linens provided.", spot_type: "Private Apartment", guests: 2, price: 100, lng: -79.410468, lat: 43.656345, bedrooms: 1, bathrooms: 2, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment5.jpeg")
spot6 = Spot.create!(host_id: user1.id, title: "2 Queen Bedrooms w/ Walk-In Closet in Modern Apartment", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "*This is a PRIVATE BEDROOM in a SHARED APARTMENT, not an entire home/apartment listing.
  If your dates are unavailable, check our other listings in this apartment, located below* This luxury style
  apartment is perfect for travelers. Two FULL bathrooms, both with showers! Unlike other private bedroom listings,
  no waiting around to use the bathroom! We are just three blocks from the express subway station. Not only that,
  we're just a few subway stops from Times Square! Check the last photo in our listing for proof.
  Entire apartment renovation complete with modern furnishings, including amenities like a washer, dryer, and dishwasher.
  Your bedroom comes with a private walk-in closet. Your bedroom will have a personal key and air conditioning
  for your convenience.", spot_type: "Shared Room", guests: 2, price: 120, lng: -79.403129, lat: 43.669291, bedrooms: 2, bathrooms: 2, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment6.jpeg")
spot7 = Spot.create!(host_id: user1.id, title: "Charming, Exposed Brick Loft", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Exposed brick. High ceilings. Wood floor. Lots of windows. Huge bathroom! Great queen size bed. LED with Apple TV.
  New cafe table in kitchen to work and eat from. Furnished with towels, bathroom amenities, some kitchen ware and obviously great sheets :)", spot_type: "Private Loft", guests: 2, price: 110, lng: -73.595922, lat: 45.483386, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment7.jpeg")
spot8 = Spot.create!(host_id: user1.id, title: "Amazing Downtown Spot With Rooftop", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Come stay in a large private room in the upper east side. The bed is queen sized and very comfortably sleeps two.
  Kitchen amenities include a microwave, stove & large sink. Secure WIFI internet access is available.
  You have your own air conditioning unit and automatic heat in the winter.
  Towels, clean sheets, shampoo, conditioner and soap will be provided.
  A clothing rack is also available. Will help with special requests, of course, so please let me know what you need!", spot_type: "Private Room", guests: 2, price: 110, lng: -73.615492, lat: 45.469942, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment8.jpeg")
spot9 = Spot.create!(host_id: user1.id, title: "Queen size bed, steps to subway. Perfect location!", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "I rent out both of the bedrooms in the apartment but usually I am still staying very close by and will be there to check you in.
  Sometimes I do travel for work but even if I am not home I am still more than happy to help with directions or advice on places to go.
When I am out of town you will have a local emergency contact which will be the same person that will check you in. :)", spot_type: "Shared Room", guests: 2, price: 110, lng: -73.978458, lat: 40.662935, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment9.jpeg")
spot10 = Spot.create!(host_id: user1.id, title: "Large Contemporary Room", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Spacious room with a decorative brick fireplace with heating and AC unit.
  This apartment is best suited for young travelers that want to spend their time exploring the city.
A classic, fully restored, turn of the century New York apartment (1905). with high ceilings,
exposed brick and wooden floors, right in front of central park (1 minute walking), a premium location in NY.
The house has 2 bedrooms, one for the host and one for guests.", spot_type: "Private Room", guests: 2, price: 110, lng: -73.949626, lat: 40.728793, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment10.jpeg")
spot11 = Spot.create!(host_id: user1.id, title: "All Private Bed Room, Living Room & Bath Room!", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Hello.
You will have complete privacy including your own private bedroom, private living room, private kitchen, and private bathroom. No sharing.
 It is great for couples, solo adventurers, and business travelers. There are two metro-subway lines just 1.5 blocks away.
 Grocery store located next door, and numerous restaurants located just a few steps away. LGBTQ friendly & all good folks welcome!", spot_type: "Private Apartment", guests: 2, price: 110, lng: -73.928168, lat: 40.763777, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment11.jpeg")
spot12 = Spot.create!(host_id: user1.id, title: "COMFORTABLE NYC RETREAT & Breakfast", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Beautiful 2-bedroom apt on a lovely tree lined street that overlooks a community garden. Close walk to many museums, parks, & food.
  Buses right outside the front door & the subway is just a couple blocks away so you can get downtown quickly!", spot_type: "Private Apartment", guests: 2, price: 110, lng: -122.419498, lat: 37.796761, bedrooms: 1, bathrooms: 2, beds: 2, image: "https://s3.amazonaws.com/xenia-seeds/apartment12.jpeg")
spot13 = Spot.create!(host_id: user1.id, title: "Spacious Private Room, lots of character & light", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Spacious room in a 2-bedroom apartment. Enjoy your stay in a bright & sunny apartment.
  Full bedroom including shared living room, elegant bathroom with bathtub, and use of a shared large kitchen.
  3 blocks from the train, get downtown in 15 minutes on the train. Vibrant fun neighborhood, bars and restaurants within a few blocks.", spot_type: "Private Room", guests: 2, price: 110, lng: -122.449625, lat: 37.778515, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment13.jpeg")
spot14 = Spot.create!(host_id: user1.id, title: "Classic Brownstone, Private Kitchen & Entrance", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "The fully furnished apartment is more than 400 square feet. It has gorgeous original carved wood details,
  beautiful exposed brick walls, an original fireplace, and wood floors.
The studio apartment is totally yours – completely private (not shared),
with your own private entrance. However, the BATHROOM IS SHARED with one other apartment (the apartment of the host, Jacob and his partner Layna).
The bathroom is located in a completely private hallway between the two apartments. Your apartment has doors that lock. Jacob and Jill are the only people who share the bathroom.", spot_type: "Private Room", guests: 2, price: 110, lng: -122.461555, lat: 37.779193, bedrooms: 1, bathrooms: 1, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment14.jpeg")
spot15 = Spot.create!(host_id: user1.id, title: "Private Room- 1st Floor Apartment", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Hello fellow BnB-ers! We have a big spare bedroom available to rent on a temporary basis.
  The room has a queen size bed, love seat, TV with Netflix, fireplace, tons of shelving storage and two big closets. The bedrooms are on opposite sides of the apartment so we both will have privacy.
  You are also welcome to use the living room and kitchen.
  We are in an elevator building with coin laundry available in the basement.
  My husband and I live together in the second bedroom.
  We also have an adorable pekepoo puppy named Bear, who is
  hypoallergenic and doesn't shed. She's a total heartbreaker,
  never makes a sound and loves greeting new guests with cuddles and kisses! Utilities and internet are included,
  and we provide kitchen and shower supplies.", spot_type: "Private Room", guests: 2, price: 110, lng: -122.393835, lat: 37.778922, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment15.jpeg")
spot16 = Spot.create!(host_id: user1.id, title: "MANHATTAN STUDIO APARTMENT", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "This place is perfect for couples and single travelers. There is an elevator so you don't have to carry your
  luggage up the stairs. The kitchen has everything you need for cooking and serving,
  there is a small dining table there you can have breakfast and dinner.
Check-in and Check-out times are flexible and depend on other guest arrival/ departure times.
But please try to make it before or at 12 pm for check-out and 3pm or after for check-in.
If you are arriving late night please let me know in advance so there is no inconvenience for you and me.
*** For security purposes your itinerary will not show you the exact address, its very close anyway.
I had an unpleasant experience with a guest trying to access the building before the check-in time and without me.
However if you are concerned about it, let me know, I will give you the exact address after you introduce yourself.", spot_type: "Studio Apartment", guests: 2, price: 110, lng: -122.427910, lat: 37.801712, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment16.jpeg")
spot17 = Spot.create!(host_id: user1.id, title: "Nice Room in Charming Apartment", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "My place is a charming 2BR apartment of which the semi-private living room is available.
  The room holds a comfortable futon bed with plenty of space to spare.
  Located in a trendy area with lots of cafes, shops, restaurant.", spot_type: "Private Room", guests: 2, price: 110, lng: -83.042417, lat: 42.362518, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment17.jpeg")
spot18 = Spot.create!(host_id: user1.id, title: "Excellent Private Room Large Window", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "My place has self-check-in and other optimized features for Airbnb guests in my four-room duplex.
  INSTANT BOOK for quicker booking or shoot any questions I'll gladly answer them.
  I try and meet most guests but sometimes our schedules don't work.
  You'll catch me in the common areas depending on the time of the day.
  I am available if you need to reach me the fastest way is through the Airbnb site or the app.", spot_type: "Private Room", guests: 2, price: 110, lng: -83.124643, lat: 42.326866, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment18.jpeg")
spot19 = Spot.create!(host_id: user1.id, title: "Queen Size Bed + Big Desk", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Private bedroom with a queen sized bed available, for FEMALES ONLY!
  This space is perfect for anybody that is looking for a bigger space in Manhattan.
  You will be sharing a 3 bedroom apartment with two other females.
  Convenient location with very easy access to the subwa", spot_type: "Shared Room", guests: 2, price: 110, lng: -83.189188, lat: 42.350848, bedrooms: 1, bathrooms: 2, beds: 1, image: "https://s3.amazonaws.com/xenia-seeds/apartment19.jpeg")
spot20 = Spot.create!(host_id: user1.id, title: "Hip Trendy and Convenient!", address: '262 W 38th St, New York, New York, 10018, United States',
  body: "Come make yourself feel at ease here in my home after long days of travel!
  Beautiful spacious private room in my large home available for you to use with
  comfortable real memory foam mattress, Digital cable TV, mini refrigerator, and two closets! The room itself is private, but the common areas are shared.
   Please understand that this is a large, shared home and myself and a few other room mates will also be using the common areas.
   Don't hesitate to ask if you have any questions!", spot_type: "Private Room", guests: 2, price: 110, lng: -73.993850, lat: 40.724013, bedrooms: 1, bathrooms: 2, beds: 3, image: "https://s3.amazonaws.com/xenia-seeds/apartment20.jpeg")

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
