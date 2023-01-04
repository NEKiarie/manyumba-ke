class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :property_id
      t.integer :buyer_id
      t.integer :seller_id
      t.integer :amount_paid
      t.integer :transaction_id

      t.timestamps
    end
  end
end
