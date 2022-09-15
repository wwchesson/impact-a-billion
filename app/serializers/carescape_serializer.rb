class CarescapeSerializer < ActiveModel::Serializer
  attributes :id, :api_address, :image, :comments, :likes, :past_event_id, :event_name, :event_location, :event_date
end
