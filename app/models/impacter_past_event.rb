class ImpacterPastEvent < ApplicationRecord
    belongs_to :user
    belongs_to :past_event

    def carescape_image
        self.past_event.carescape.image
    end

    def past_event_name
        self.past_event.name
    end

    def past_event_location
        self.past_event.location
    end

    def past_event_date
        self.past_event.date
    end
end
