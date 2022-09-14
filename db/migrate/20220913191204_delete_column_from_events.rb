class DeleteColumnFromEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :carescape_id
  end
end
