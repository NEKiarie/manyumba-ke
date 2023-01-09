class Faq < ApplicationRecord
 validates :question, presence: true, uniqueness: true
 validates :response, presence: true 
end