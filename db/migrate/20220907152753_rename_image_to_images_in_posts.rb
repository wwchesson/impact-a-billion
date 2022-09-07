class RenameImageToImagesInPosts < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :image, :images
  end
end
