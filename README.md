[Live](https://xenia-pro.herokuapp.com/#/)

Xenia is a hospitality web application imitating the UX of AirBnB. Users are able to act as a host or a guest, either creating or booking different rental units in the location they desire. The search function allows users to focus a scrollable map on a specific location, which will present them with the spots available in that area. Xenia was created with Ruby on Rails, postgreSQL, JavaScript, and React/Redux.

# Features and Implementation
## Spots
Users are able to click on a spot which will bring them to the spot show page. When on this page, users are able to view all of the information about the spot, as well as book the spot if the desired time-slot is available.
### Bookings
![](https://media.giphy.com/media/xUOwGnbvUrFAaWCY1y/giphy.gif)

When viewing a specific spot, users are able to use the calendar to create a booking if one is available. The `Booking` model has a `belongs_to` association to both a user (`:booker`) and a spot (`:spot`), while the `User` model `has_many` `:spots` and `:bookings`. Using these associations coupled with model-level `Booking` validations ensures that users are not able to book their own spots, or spots which overlap with other bookings on that spot.
```ruby
def overlapping_bookings
  Booking
    .where.not(id: self.id)
    .where(spot_id: spot_id)
    .where.not('start_date > :end_date OR end_date < :start_date',
                start_date: self.start_date, end_date: self.end_date)
end
```
### Amenities
The `Amenity` model has a  many-to-many association with the `Spot` model through a `SpotAmenity` join table, allowing for a spot to have many amenities, and for amenities to have many spots.
## Map
![](https://media.giphy.com/media/l4pT1N2A2apkN0Pqo/giphy.gif)

Using the Google Maps API, Xenia allows users to use the search bar to search for a location on the map component, which will then render all spots in that location on the page as links to their respective show pages, and as markers on the map displaying their price. Users are then able to zoom and scroll with the map in that location to filter out the spots that appear on the map. The map's state keeps track of the bounds of the map, allowing the map to render only the spots with `lng` and `lat` properties within those bounds.
## User Authentication
On Xenia, user authentication is employed without the use of any external libraries. The `BCrypt` gem is used to hash a given password, storing it in the database on the `users` table. The current user's session token is then verified against the cookie's session token to determine whether the user is logged in or not. When a user logs in, their session token is reset, ensuring that the cookie's session token is the same as the current user's at every login. The login/signup form component appears on the page as a modal where a user is able to signup, login, or demo the site as a guest.
# Future Direction
* Adding reviews for users to create/edit on spots they have placed bookings with in the past.
* Create form for hosts to create/edit spots.
* More filters for users to narrow down their desired specifications (ex: # of guests allowed, amenities provided...)
* Having the calendar gray-out booking-slots which are currently unavailable.
