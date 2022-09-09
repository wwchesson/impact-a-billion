class AddColumnToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :organizer_id, :integer
  end
end
