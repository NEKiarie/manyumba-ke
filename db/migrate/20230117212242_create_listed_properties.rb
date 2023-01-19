class CreateListedProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :listed_properties do |t|
      t.integer :property_id
      t.integer :seller_id
      t.boolean :is_sold

      t.timestamps
    end
  end
end
