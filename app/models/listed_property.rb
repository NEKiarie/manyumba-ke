class ListedProperty < ApplicationRecord
    has_many :users
    has_one :property
end
