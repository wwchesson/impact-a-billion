class Request < ApplicationRecord
    validates :name, presence: true, length: {minimum: 8, maximum: 100}
    validates :description, presence: true, length: {minimum: 8, maximum: 1000}
    validates :image, presence: true
    validates :category, presence: true
    validates :hours_requested, presence: true
    
    enum :approved, [:denied, :pending, :approved]
    belongs_to :user

    def user_name_for_request
        self.user.name
    end
end
