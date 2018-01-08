class CreateAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :amenities do |t|
      t.string :type, null: false

      t.timestamps
    end
    add_index :amenities, :type
  end
end
