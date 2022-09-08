class AddColumnToRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :zip, :integer
    remove_column :requests, :approved, :boolean
  end
end
