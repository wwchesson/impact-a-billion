class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :type, :name, :email, :zip, :skills, :availability, :travel_radius, :token_points, :org_name, :admin
end
