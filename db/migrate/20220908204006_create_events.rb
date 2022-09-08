class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.integer :location
      t.string :category
      t.boolean :completed
      t.integer :carescape_id
      t.datetime :date
      t.timestamps
    end
  end
end
