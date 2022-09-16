class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :category, :completed, :organizer_id, :date, :hours_needed, :frequency, :image, :impacter_associated_with_events

end
