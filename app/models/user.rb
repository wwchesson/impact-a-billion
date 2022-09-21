class User < ApplicationRecord
    #sign-up form
    validates :username, presence: true, uniqueness: true, length: {minimum: 4, maximum: 16}
    validates :name, presence: true, length: {in: 4..30}
    validates :email, presence: true, format: {with: /\A(\S+)@(.+)\.(\S+)\z/, message: "Email invalid"}, uniqueness: {case_sensitive: false}, length: {minimum: 8, maximum: 24}
    validates :zip, presence: true, length: {is: 5}
 

    has_many :posts
    has_many :requests

    has_secure_password
end
