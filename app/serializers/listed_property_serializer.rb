class ListedPropertySerializer < ActiveModel::Serializer
  attributes :id, :is_sold
  belongs_to :seller, class_name: "User"
  belongs_to :property
 
end
