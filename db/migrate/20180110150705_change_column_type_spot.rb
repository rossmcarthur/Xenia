class ChangeColumnTypeSpot < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :beds, 'integer USING CAST(beds AS integer)'
    change_column :spots, :bedrooms, 'integer USING CAST(bedrooms AS integer)'
    change_column :spots, :bathrooms, 'integer USING CAST(bathrooms AS integer)'
  end
end
