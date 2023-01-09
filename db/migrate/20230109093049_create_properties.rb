class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.integer :type_id
      t.string :address
      t.integer :location_id
      t.integer :beds
      t.float :baths
      t.string :size
      t.string :image_url
      t.string :notes
      t.boolean :fore_closure

      t.timestamps
    end
  end
end
