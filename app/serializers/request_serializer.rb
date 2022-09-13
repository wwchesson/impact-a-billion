class RequestSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :images, :approved, :category, :hours_requested, :impacter_id, :organizer_id
end
