class ChangePriceType < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :price, :string, null: false
  end
end
