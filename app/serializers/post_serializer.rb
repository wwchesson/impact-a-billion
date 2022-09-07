class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :comments, :user_id, :event_id, :caption
end
