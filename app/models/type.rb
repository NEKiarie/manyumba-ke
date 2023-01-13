class Type < ApplicationRecord
    validates :description, presence: true
    has_many :properties
    
end
