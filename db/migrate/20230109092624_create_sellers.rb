class CreateSellers < ActiveRecord::Migration[7.0]
  def change
    create_table :sellers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email_address
      t.integer :location_id
      t.string :phone_number

      t.timestamps
    end
  end
end
