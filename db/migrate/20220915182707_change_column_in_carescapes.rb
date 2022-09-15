class ChangeColumnInCarescapes < ActiveRecord::Migration[7.0]
  def change
    rename_column :carescapes, :event_id, :past_events_id
  end
end
