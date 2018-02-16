class Review < ApplicationRecord
  validates :body, :spot_id, :author_id, :rating, presence: true
  validates :rating, numericality: { less_than: 6 }

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
