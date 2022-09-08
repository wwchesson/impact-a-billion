class Event < ApplicationRecord
    has_one :impacter_events
    has_many :users, through: :impacter_events
end
