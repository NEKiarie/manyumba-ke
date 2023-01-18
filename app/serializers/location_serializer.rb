class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :county

  has_many :properties
  
end
