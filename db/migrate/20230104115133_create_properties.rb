class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.integer :seller_id
      t.string :location
      t.integer :price
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end
