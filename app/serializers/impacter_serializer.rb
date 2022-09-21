class ImpacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :zip, :skills, :availability, :travel_radius, :image, :token_points
end

