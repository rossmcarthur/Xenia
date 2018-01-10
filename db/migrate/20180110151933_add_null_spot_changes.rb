class AddNullSpotChanges < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :beds, :integer, null: false
    change_column :spots, :bedrooms, :integer, null: false
    change_column :spots, :bathrooms, :integer, null: false
  end
end
