class ChangeUsersAttributeName < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :skillls, :skills
  end
end
