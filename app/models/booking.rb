class Booking < ApplicationRecord
  validates :start_date, :end_date, :spot_id, :booker_id, presence: true
  validate :start_before_end
  validate :not_overlapping

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

    def not_overlapping
      overlapping_bookings = Booking.where.not(id: self.id).where(spot_id: spot_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
      NOT((start_date > :end_date) OR (end_date < :start_date))
      SQL

      if !overlapping_bookings.empty?
        errors[:base] << 'Spot is already booked during this time'
      end
    end
end
