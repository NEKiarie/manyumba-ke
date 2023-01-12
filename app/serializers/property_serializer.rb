class PropertySerializer < ActiveModel::Serializer
  attributes :id, :type_id, :address, :location_id, :beds, :baths,
  :size, :image_url, :notes, :fore_closure, :price, :seller_id, :description
end
