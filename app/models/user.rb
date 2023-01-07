class User < ApplicationRecord
    has_many :properties
    has_one :profile
end

# has_many :patient_appointment, class_name: "Appointment", foreign_key: "patient_id"
