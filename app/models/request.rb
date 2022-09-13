class Request < ApplicationRecord
    enum :approved, [:denied, :pending, :approved]
    belongs_to :impacter
end
