class RenameSellerIdToUserIdInProperties < ActiveRecord::Migration[7.0]
  def change
    rename_column :properties, :seller_id, :user_id
  end
end
