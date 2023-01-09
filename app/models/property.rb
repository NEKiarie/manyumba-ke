class Property < ApplicationRecord
    validates :type, presence: true
    validates :address, presence: true
    validates :location, presence: true
    
    belongs_to :type
    belongs_to :location

    belongs_to :seller

    has_many :payment
    has_many :property_images
end
