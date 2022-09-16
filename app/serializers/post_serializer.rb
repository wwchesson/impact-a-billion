class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :comments, :user_id, :past_event_id, :caption
end
