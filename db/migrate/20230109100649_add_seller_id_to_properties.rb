class AddSellerIdToProperties < ActiveRecord::Migration[7.0]
  def change
    add_column :properties, :seller_id, :integer
  end
end
