class AddAndChangeColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :frequency, :string
    add_column :requests, :volunteers_needed, :integer
    add_column :events, :hours_needed, :integer
    add_column :events, :frequency, :string
  end
end
