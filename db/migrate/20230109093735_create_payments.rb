class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :price
      t.integer :property_id
      t.integer :seller_id
      t.integer :buyer_id
      t.date :sale_date

      t.timestamps
    end
  end
end
