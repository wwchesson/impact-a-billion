class CarescapeSerializer < ActiveModel::Serializer
  attributes :id, :api_address, :image, :comments, :likes
end
