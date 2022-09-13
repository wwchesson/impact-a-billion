class Impacter < User
    
    has_many :impacter_events
    has_many :events, through: :impacter_events

    def my_events
        self.events.pluck(:name, :date)
    end
end
