class UserWithActivitiesSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :type, :name, :email, :zip, :skills, :availability, :travel_radius, :token_points, :org_name, :admin, :image, :birthdate, :user_carescape

  has_many :posts
  has_many :requests
end
