class CreatePastEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :past_events do |t|
      t.string :name
      t.string :description
      t.integer :location
      t.string :category
      t.datetime :date
      t.integer :organizer_id
      t.string :image

      t.timestamps
    end
  end
end
