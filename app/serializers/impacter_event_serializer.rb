class ImpacterEventSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :impacter_id, :event_name, :event_date
end
