class Impacter < User
    has_many :posts
    has_many :requests
    
    has_many :impacter_events
    has_many :events, through: :impacter_events
end
