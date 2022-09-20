class User < ApplicationRecord
    #sign-up form
    validates :username, presence: true, uniqueness: true, length: {minimum: 4, maximum: 16}
    validates :password, presence: true, length: {minimum: 4, maximum: 16}
    validates :password_confirmation, presence: true, length: {minimum: 4, maximum: 16}
    validates :name, presence: true, length: {minimum: 2, maximum: 16}
    # validates :email, presence: true, format: {with: /^(.+)@(.+)$/, message: "Email invalid"}, uniqueness: {case_sensitive: false}, length: {minimum: 8, maximum: 24}
    validates :zip, presence: true, length: {is: 5}

    #profile patches
    validates :skills, presence: true, length: {minimum: 5, maximum: 200}
    validates :availability, presence: true, length: {minimum: 5, maximum: 200}
    # validates :image, allow_blank: true, format: {
    #     with: %r{\.gif|jpg|png\Z}i,
    #     message: 'must be a url for gif, jpg, or png image.'
    #   }

    has_many :posts
    has_many :requests

    has_secure_password
end
