class ChangeLocationDataType < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :location, :string
    change_column :past_events, :location, :string
    change_column :requests, :location, :string
  end
end
