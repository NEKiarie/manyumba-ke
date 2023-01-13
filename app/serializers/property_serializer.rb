class PropertySerializer < ActiveModel::Serializer
  attributes :id, :type_id, :address, :location_id, :beds, :baths,
  :size, :image_url, :notes, :fore_closure, :price, :seller_id, :description

  belongs_to :location
  
  def price
    self.object.price.to_fs(:delimited)
  end
end
