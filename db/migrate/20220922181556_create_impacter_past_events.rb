class CreateImpacterPastEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :impacter_past_events do |t|
      t.integer :past_event_id
      t.integer :user_id

      t.timestamps
    end
  end
end
