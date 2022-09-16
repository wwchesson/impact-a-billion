class RequestSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :approved, :category, :hours_requested, :frequency, :volunteers_needed, :user_id, :organizer_id, :user_name_for_request
end
