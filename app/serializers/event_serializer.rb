class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :category, :completed, :organizer_id, :date

end
