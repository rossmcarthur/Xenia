class SpotsAddRoomType < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :spot_type, :string, {null: false}
  end
end
