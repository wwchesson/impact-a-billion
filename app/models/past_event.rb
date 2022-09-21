class PastEvent < ApplicationRecord
    has_one :carescape
    belongs_to :organizer
    has_many :posts

    def carescape_image
        self.carescape.image
    end

end
