class ImpacterEvent < ApplicationRecord
    belongs_to :event
    belongs_to :impacter

    def event_name
        self.event.name
    end

    def event_date
        self.event.date
    end
end
