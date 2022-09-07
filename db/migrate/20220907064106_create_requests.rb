class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :name
      t.string :description
      t.string :images
      t.boolean :approved
      t.string :category
      t.integer :hours_requested
      t.integer :user_id
      t.integer :organizer_id

      t.timestamps
    end
  end
end
