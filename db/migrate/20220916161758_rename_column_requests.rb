class RenameColumnRequests < ActiveRecord::Migration[7.0]
  def change
    rename_column :requests, :zip, :location
  end
end
