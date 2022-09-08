class CreateCarescapes < ActiveRecord::Migration[7.0]
  def change
    create_table :carescapes do |t|
      t.string :api_address
      t.string :image
      t.string :comments
      t.integer :likes

      t.timestamps
    end
  end
end
