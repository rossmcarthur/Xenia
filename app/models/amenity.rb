class Amenity < ApplicationRecord
  validates :type, presence: true

  has_many :spots,
    through: :SpotAmenities,
    source: :spot


end
