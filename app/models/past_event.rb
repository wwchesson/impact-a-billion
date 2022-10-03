class PastEvent < ApplicationRecord
    has_one :carescape, dependent: :destroy
    belongs_to :organizer
    has_many :posts

    has_many :impacter_past_events
    has_many :users, through: :impacter_past_events

    def carescape_image
        self.carescape.image
    end

    def associated_users
        self.users.map{|user| user.id}
    end



end
