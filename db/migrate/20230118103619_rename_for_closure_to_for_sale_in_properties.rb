class RenameForClosureToForSaleInProperties < ActiveRecord::Migration[7.0]
  def change
    rename_column :properties, :fore_closure, :for_sale
  end
end
