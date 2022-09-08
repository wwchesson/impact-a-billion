class RenameEiTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :event_impacters, :impacter_events
  end
end
