class Spot < ApplicationRecord
  validates :host_id, :title, :address, :body, :guests, :price, :lng, :lat, presence: true
  has_attached_file :image, styles: { small: "160x160>" }, default_url: "abandoned.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :spot_id

  has_many :amenities,
    through: :SpotAmenity,
    source: :amenity_id

    def self.in_bounds(bounds)
      self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
    end

    def average_rating
      self.reviews.average(:rating).to_i
    end

end
