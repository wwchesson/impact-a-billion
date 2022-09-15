class ChangeAnotherColumnInCarescapes < ActiveRecord::Migration[7.0]
  def change
    rename_column :carescapes, :past_events_id, :past_event_id
  end
end
