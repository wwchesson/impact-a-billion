class CarescapeSerializer < ActiveModel::Serializer
  attributes :id, :api_address, :image, :comments, :likes, :event_id, :event_name
end
