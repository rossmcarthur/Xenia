class AddColumnsBookings < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :start_date, :date, null: false
    add_column :bookings, :end_date, :date, null: false
    add_column :bookings, :spot_id, :integer, null: false
    add_column :bookings, :booker_id, :integer, null: false
  end
end
