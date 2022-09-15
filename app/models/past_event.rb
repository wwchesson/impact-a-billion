class PastEvent < ApplicationRecord
    has_one :carescape

    def carescape_image
        self.carescape.image
    end

end
