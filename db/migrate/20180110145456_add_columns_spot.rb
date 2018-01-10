class AddColumnsSpot < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :bathrooms, :string
    add_column :spots, :bedrooms, :string
    add_column :spots, :beds, :string
  end
end
