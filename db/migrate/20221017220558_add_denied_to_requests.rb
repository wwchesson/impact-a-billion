class AddDeniedToRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :denied, :integer
  end
end
