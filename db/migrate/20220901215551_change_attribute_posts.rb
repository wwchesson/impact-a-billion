class ChangeAttributePosts < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :commments, :comments
  end
end
