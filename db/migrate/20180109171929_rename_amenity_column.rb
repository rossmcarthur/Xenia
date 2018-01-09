class RenameAmenityColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :amenities, :type, :amenity_type
  end
end
