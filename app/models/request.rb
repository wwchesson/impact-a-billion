class Request < ApplicationRecord
    enum :approved, [:denied, :pending, :approved]
    belongs_to :user

    def user_name_for_request
        self.user.name
    end
end
