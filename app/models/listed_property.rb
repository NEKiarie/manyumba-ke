class ListedProperty < ApplicationRecord
    belongs_to :seller, class_name: "User"
    belongs_to :property   
    belongs_to :type
end
