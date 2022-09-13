class ChangeColumnsBack < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :impacter_id, :user_id
    rename_column :requests, :impacter_id, :user_id
  end
end
