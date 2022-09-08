class CreateEventImpacters < ActiveRecord::Migration[7.0]
  def change
    create_table :event_impacters do |t|
      t.integer :event_id
      t.integer :user_id

      t.timestamps
    end
  end
end
