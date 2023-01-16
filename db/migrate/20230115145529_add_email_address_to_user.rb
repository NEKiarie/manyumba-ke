class AddEmailAddressToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email_address, :string, unique: true
  end
end
