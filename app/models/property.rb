class Property < ApplicationRecord
    validates :type_id, presence: true
    validates :address, presence: true
    validates :location_id, presence: true
    validates :seller_id, presence: true
    validates :price, presence: true
    
    belongs_to :type
    belongs_to :location

    belongs_to :seller, class_name: "User"

    has_many :payment
    has_many :property_images
    #has_many :listed_properties
end
