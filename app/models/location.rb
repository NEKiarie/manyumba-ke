class Location < ApplicationRecord
   validates :name, presence: true
   has_many :properties
   has_many :sellers
end
