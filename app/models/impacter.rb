class Impacter < User
    has_many :impacter_events
    has_many :events, through: :impacter_events
end
