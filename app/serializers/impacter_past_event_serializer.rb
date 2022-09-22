class ImpacterPastEventSerializer < ActiveModel::Serializer
  attributes :id, :past_event_id, :user_id, :carescape_image, :past_event_name, :past_event_location, :past_event_date

end