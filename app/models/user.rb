class User < ApplicationRecord
    has_many :posts
    has_many :requests

    has_secure_password
end
