class ChangeColumnNames < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :user_id, :impacter_id
    rename_column :requests, :user_id, :impacter_id
  end
end
