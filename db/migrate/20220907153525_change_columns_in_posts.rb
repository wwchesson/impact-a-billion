class ChangeColumnsInPosts < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :images, :image
    add_column :posts, :caption, :string
  end
end
