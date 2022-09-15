class Event < ApplicationRecord
    has_many :impacter_events
    has_many :impacters, through: :impacter_events

    belongs_to :organizer
    has_one :carescape

    def impacter_associated_with_events
        self.impacters.pluck(:name)
    end
    

end
