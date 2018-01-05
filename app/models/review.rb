class Review < ApplicationRecord
  validates :title, :body, :spot_id, :author_id, :rating, presence: true
  validates :rating, numericality: { only_integer: true, greater_than: 0, less_than: 6 }

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
