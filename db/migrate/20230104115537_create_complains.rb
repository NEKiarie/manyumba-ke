class CreateComplains < ActiveRecord::Migration[7.0]
  def change
    create_table :complains do |t|
      t.string :description
      t.boolean :is_solved
      t.integer :user_id

      t.timestamps
    end
  end
end
