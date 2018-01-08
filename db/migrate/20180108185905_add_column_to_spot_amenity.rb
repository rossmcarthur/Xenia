class AddColumnToSpotAmenity < ActiveRecord::Migration[5.1]
  def change
    add_column :spot_amenities, :spot_id, :integer
    add_column :spot_amenities, :amenity_id, :integer
  end
end
