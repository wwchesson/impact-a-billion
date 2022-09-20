class Event < ApplicationRecord
    has_many :impacter_events
    has_many :impacters, through: :impacter_events

    belongs_to :organizer

    validates_uniqueness_of :impacter, scope: :user_id
    

    def impacter_associated_with_events
        self.impacters.pluck(:name)
    end
    

end
