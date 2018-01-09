class Amenity < ApplicationRecord
  validates :amenity_type, presence: true

  has_many :spot_amenities,
    class_name: :SpotAmenity,
    foreign_key: :amenity_id

  has_many :spots,
    through: :spot_amenities,
    source: :spot

end
