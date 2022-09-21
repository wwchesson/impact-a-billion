class Organizer < User
    has_many :events
    has_many :past_events
end
