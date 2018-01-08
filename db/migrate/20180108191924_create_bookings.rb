class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :spot_id, null: false
      t.integer :booker_id, null: false

      t.timestamps
    end
  end
end
