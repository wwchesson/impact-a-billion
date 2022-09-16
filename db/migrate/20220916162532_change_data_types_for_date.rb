class ChangeDataTypesForDate < ActiveRecord::Migration[7.0]
  def change
    change_column :past_events, :date, :string
    change_column :events, :date, :string
  end
end
