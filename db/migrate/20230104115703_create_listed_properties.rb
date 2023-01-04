class CreateListedProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :listed_properties do |t|
      t.integer :seller_id
      t.integer :property_id

      t.timestamps
    end
  end
end
