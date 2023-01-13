class Seller < ApplicationRecord
    has_many :properties
    belongs_to :location
end
