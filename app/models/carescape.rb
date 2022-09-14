class Carescape < ApplicationRecord
    belongs_to :event

    def event_name
        self.event.name
    end
end
