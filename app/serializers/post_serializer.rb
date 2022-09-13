class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :comments, :impacter_id, :event_id, :caption
end
