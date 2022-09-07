class UserSignupSerializer < ActiveModel::Serializer
  attributes :username, :password, :password_confirmation, :name, :email, :zip
end
