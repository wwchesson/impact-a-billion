class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :image
      t.integer :likes
      t.string :commments
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
  end
end
