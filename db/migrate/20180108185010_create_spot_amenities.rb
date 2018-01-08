class CreateSpotAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :spot_amenities do |t|
      t.timestamps
    end
  end
end
