class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :category, :completed, :carescape_id, :organizer_id, :date

end
