class AnotherColumnRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :approved, :integer
  end
end
