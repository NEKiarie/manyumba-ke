class SellerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email_address, :phone_number
  belongs_to :location
  has_many :properties
end
