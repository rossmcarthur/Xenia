class Booking < ApplicationRecord

  validates :start_date, :end_date, :spot_id, :booker_id, presence: true
  validate :does_not_overlap_approved_request

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: :User

    belongs_to :spot,
    foreign_key: :spot_id,
    class_name: :Spot

    def cost
      self.spot.price * ((self.end_date - self.start_date).to_i)
    end

    def overlapping_bookings
      Booking
        .where.not(id: self.id)
        .where(spot_id: spot_id)
        .where.not('start_date > :end_date OR end_date < :start_date',
                    start_date: self.start_date, end_date: self.end_date)
    end

    def does_not_overlap_approved_request
      unless overlapping_bookings.empty?
        errors[:base] << 'Booking overlaps with existing booking'
      end
    end

end
