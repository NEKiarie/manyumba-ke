class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :beds, :baths,
  :size, :image_url, :notes, :for_sale, :price, :description

  belongs_to :location
  belongs_to :type
  belongs_to :seller
  has_many :seller
  
  def price
    self.object.price.to_fs(:delimited)
  end
end
