class Booking < ApplicationRecord
  validates :start_date, :end_date, :spot_id, :booker_id, presence: true
  validate :start_before_end

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: :User

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot

    def start_before_end
      if self.start_date > self.end_date
        errors[:base] << 'Start date must come before end date'
      end
    end

    def after_present
      if self.start_date && self.start_date < Date.today
        errors[:base] << 'Cannot book a date that is in the past'
      end
    end

    def cost
      self.spot.price * ((self.end_date - self.start_date).to_i)
    end

end
