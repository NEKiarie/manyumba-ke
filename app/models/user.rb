class User < ApplicationRecord
    has_secure_password
    

    validates :user_name, presence: true, uniqueness: true
    validates :first_name, presence: true   
    validates :last_name, presence: true
    validates :email_address, presence: true, uniqueness: true

    # PASSWORD_REQUIREMENTS = /\A
    #     (?=.{6,})               # At least 6 character long
    #     (?=.*\d)                # Contains at least 1 number
    #     (?=.*[a-z])             # Contains at least 1 lowercase letter
    #     x(?=.*[A-Z])             # Contains at least 1 uppercase letter
    #     (?=.*[[:^alnum:]])      # Contains at least 1 symbol
    # /x
    # validates :password, 
    #     format: { 
    #         with: PASSWORD_REQUIREMENTS, 
    #         message: "must be at least 6 characters, including lower and upper case letters and at least one number and symbol" }, 
    #     if: :password_digest_changed?

    
    
    has_many :user_properties
    #has_many :properties, 
    has_one :profile
    has_many :properties, class_name: "Property", foreign_key: "seller_id"
    #has_many :listed_properties, class_name: "ListedProperty", foreign_key: "seller_id"

    
end
