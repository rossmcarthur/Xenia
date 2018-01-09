class SpotAmenity < ApplicationRecord

  belongs_to :amenity,
    class_name: :Amenity,
    foreign_key: :amenity_id

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id

end
