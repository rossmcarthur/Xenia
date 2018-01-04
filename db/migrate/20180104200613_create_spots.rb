class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.string :address, null: false
      t.string :body, null: false
      t.integer :host_id, null: false
      t.integer :guests, null: false
      t.integer :price, null: false
      t.float :lng
      t.float :lat

      t.timestamps
    end
    add_index :spots, :title
  end
end
