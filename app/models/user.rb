class User < ApplicationRecord
    has_many :posts
    has_many :requests

    has_many :impacter_events
    has_many :events, through: :impacter_events
    
    has_secure_password
end
