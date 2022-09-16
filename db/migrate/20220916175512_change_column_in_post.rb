class ChangeColumnInPost < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :event_id, :past_event_id
  end
end
