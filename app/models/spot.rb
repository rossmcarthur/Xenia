class Spot < ApplicationRecord
  validates :host_id, :title, :address, :body, :guests, :price, :lng, :lat, presence: true

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

end
