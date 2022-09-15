class PastEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :category, :date, :organizer_id, :image
end
