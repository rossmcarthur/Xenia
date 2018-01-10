class Booking < ApplicationRecord
  validates :start_date, :end_date, :spot_id, :booker_id, presence: true

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: :User

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot


    def cost
      self.spot.price * ((self.end_date - self.start_date).to_i)
    end

end
