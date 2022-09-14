class Event < ApplicationRecord
    has_many :impacter_events
    has_many :impacters, through: :impacter_events

    belongs_to :organizer
    has_one :carescape

    

end
