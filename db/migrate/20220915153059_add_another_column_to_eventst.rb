class AddAnotherColumnToEventst < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :image, :string
    rename_column :requests, :images, :image
  end
end
