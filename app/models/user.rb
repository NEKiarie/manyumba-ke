class User < ApplicationRecord
    validates :user_name, presence: true, uniqueness: true
    validates :first_name, presence: true

    PASSWORD_REQUIREMENTS = /\A
        (?=.{6,})               # At least 6 character long
        (?=.*\d)                # Contains at least 1 number
        (?=.*[a-z])             # Contains at least 1 lowercase letter
        (?=.*[A-Z])             # Contains at least 1 uppercase letter
        (?=.*[[:^alnum:]])      # Contains at least 1 symbol
    /x
    validates :password, 
        format: { 
            with: PASSWORD_REQUIREMENTS, 
            message: "must be at least 6 characters, including lower and upper case letters and at least one number and symbol" }, 
        if: :password_digest_changed?
    
    has_many :user_properties
    has_many :properties, through: :user_properties

    has_secure_password
end
