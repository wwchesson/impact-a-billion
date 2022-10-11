class Post < ApplicationRecord
    belongs_to :user
    belongs_to :past_event

    def past_event_name
        self.past_event.name
    end

    def past_event_date
        self.past_event.date
    end

    def past_event_location
        self.past_event.location
    end

    def associated_past_event_user
        self.past_event.users.pluck(:id)
    end
end
