class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :comments, :user_id, :past_event_id, :caption, :past_event_name, :past_event_date, :past_event_location
end
