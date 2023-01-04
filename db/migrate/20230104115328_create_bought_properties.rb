class CreateBoughtProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :bought_properties do |t|
      t.integer :seller_id
      t.integer :buyer_id
      t.integer :property_id

      t.timestamps
    end
  end
end
