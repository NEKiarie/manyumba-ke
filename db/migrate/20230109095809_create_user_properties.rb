class CreateUserProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :user_properties do |t|
      t.integer :property_id
      t.integer :user_id
      t.string :notes

      t.timestamps
    end
  end
end
