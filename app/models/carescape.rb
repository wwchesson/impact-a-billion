class Carescape < ApplicationRecord
    belongs_to :past_event

    def event_name
        self.past_event.name
    end

    def event_location
        self.past_event.location
    end

    def event_date
        self.past_event.date
    end

end
