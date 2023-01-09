# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

puts "Planting 🌱..."

=begin
 All Dependancies are in this section
=end


#######################################
# counties
#####################################
puts "Creating Counties...."
counties = [
    {
        "name": "Mombasa",
        "code": 1,
        "capital": "Mombasa City"
    }, 
    {
        "name": "Kwale",
        "code": 2,
        "capital": "Kwale"
    }, 
    {
        "name": "Kilifi",
        "code": 3,
        "capital": "Kilifi"
    }, 
    {
        "name": "Tana River",
        "code": 4,
        "capital": "Hola"

    }, 
    {
        "name": "Lamu",
        "code": 5,
        "capital": "Lamu"
    }, 
    {
        "name": "Taita-Taveta",
        "code": 6,
        "capital": "Voi"
    }, 
    {
        "name": "Garissa",
        "code": 7,
        "capital": "Garissa"
    }, 
    {
        "name": "Wajir",
        "code": 8,
        "capital": "Wajir"
    }, 
    {
        "name": "Mandera",
        "code": 9,
        "capital": "Mandera"
    }, 
    {
        "name": "Marsabit",
        "code": 10,
        "capital": "Marsabit"
    }, 
    {
        "name": "Isiolo",
        "code": 11,
        "capital": "Isiolo"
    }, 
    {
        "name": "Meru",
        "code": 12,
        "capital": "Meru"
    }, 
    {
        "name": "Tharaka-Nithi",
        "code": 13,
        "capital": "Chuka"
    }, 
    {
        "name": "Embu",
        "code": 14,
        "capital": "Embu"
    }, 
    {
        "name": "Kitui",
        "code": 15,
        "capital": "Kitui"
    },
    {
        "name": "Machakos",
        "code": 16,
        "capital": "Machakos"
    }, 
    {
        "name": "Makueni",
        "code": 17,
        "capital": "Wote"
    }, 
    {
        "name": "Nyandarua",
        "code": 18,
        "capital": "Ol Kalou"
    }, 
    {
        "name": "Nyeri",
        "code": 19,
        "capital": "Nyeri"
    }, 
    {
        "name": "Kirinyaga",
        "code": 20,
        "capital": "Kerugoya/Kutus"
    }, 
    {
        "name": "Murang'a",
        "code": 21,
        "capital": "Murang'a"
    }, 
    {
        "name": "Kiambu",
        "code": 22,
        "capital": "Kiambu"
    }, 
    {
        "name": "Turkana",
        "code": 23,
        "capital": "Lodwar"
    }, 
    {
        "name": "West Pokot",
        "code": 24,
        "capital": "Kapenguria"
    }, 
    {
        "name": "Samburu",
        "code": 25,
        "capital": "Maralal"
    }, 
    {
        "name": "Trans-Nzoia",
        "code": 26,
        "capital": "Kitale"
    }, 
    {
        "name": "Uasin Gishu",
        "code": 27,
        "capital": "Eldoret"
    }, 
    {
        "name": "Elgeyo-Marakwet",
        "code": 28,
        "capital": "Iten"
    }, 
    {
        "name": "Nandi",
        "code": 29,
        "capital": "Kapsabet"
    }, 
    {
        "name": "Baringo",
        "code": 30,
        "capital": "Kabarnet"
    }, 
    {
        "name": "Laikipia",
        "code": 31,
        "capital": "Rumuruti"
    }, 
    {
        "name": "Nakuru",
        "code": 32,
        "capital": "Nakuru"
    }, 
    {
        "name": "Narok",
        "code": 33,
        "capital": "Narok"
    },
    {
        "name": "Kajiado",
        "code": 34
    }, 
    {
        "name": "Kericho",
        "code": 35,
        "capital": "Kericho"
    }, 
    {
        "name": "Bomet",
        "code": 36,
        "capital": "Bomet"
    }, 
    {
        "name": "Kakamega",
        "code": 37,
        "capital": "Kakamega"
    }, 
    {
        "name": "Vihiga",
        "code": 38,
        "capital": "Vihiga"
    }, 
    {
        "name": "Bungoma",
        "code": 39,
        "capital": "Bungoma"
    }, 
    {
        "name": "Busia",
        "code": 40,
        "capital": "Busia"
    }, 
    {
        "name": "Siaya",
        "code": 41,
        "capital": "Siaya"
    }, 
    {
        "name": "Kisumu",
        "code": 42,
        "capital": "Kisumu"
    }, 
    {
        "name": "Homa Bay",
        "code": 43,
        "capital": "Homa Bay"
    }, 
    {
        "name": "Migori",
        "code": 44,
        "capital": "Migori"
    }, 
    {
        "name": "Kisii",
        "code": 45,
        "capital": "Kisii"
    }, 
    {
        "name": "Nyamira",
        "code": 46,
        "capital": "Nyamira"
    }, 
    {
        "name": "Nairobi",
        "code": 47,
        "capital": "Nairobi City"
    }
]
Location.destroy_all
counties.length.times do |i|
    county = counties[i]
    Location.create({
        name: county[:capital],
        county: county[:name]
    })
end
puts "Done with Counties"

#######################################
# Types
#####################################
puts "Creating types...🏡"
Type.destroy_all
types = ["Apartment","Mansionette","Multi-family Home","Villas"]
types.length.times do |i|
    type = types[i]
    Type.create(
        description: type
    )
end
puts "Done with types."

=begin
 All Depends are in this section
=end
locations = Location.all
all_types = Type.all
properties = Property.all

#######################################
# Users
#####################################

puts "Creating 10 users👨.."
User.destroy_all
names = [
    {
        first_name: "Peter",
        last_name: "Kamau",
        user_name: "peter_kamau"
    },
    {
        first_name: "George",
        last_name: "Muturi",
        user_name: "george_muturi"
    },
    {
        first_name: "Elvis",
        last_name: "Kiarie",
        user_name: "elvis_kiarie"
    },
    {
        first_name: "Tess",
        last_name: "Yieke",
        user_name: "tess_yieke"
    },
    {
        first_name: "Jim",
        last_name: "Munene",
        user_name: "jim_munene"
    },
    {
        first_name: "Hafsna",
        last_name: "Nuh",
        user_name: "hafsana_nuh"
    },
    {
        first_name: "Steve",
        last_name: "Otieno",
        user_name: "steve_otieno"
    },
    {
        first_name: "Solomon",
        last_name: "Kitonyi",
        user_name: "solomon_kitonyi"
    },
    {
        first_name: "Anthony",
        last_name: "Mwaniki",
        user_name: "anthony_mwaniki"
    },
    {
        first_name: "Festus",
        last_name: "Mwaniki",
        user_name: "festus_mwaniki"
    }
]

10.times do |i|     
    user = names[i] 
    hash = BCrypt::Password.create("password")
    User.create(
        user_name: user[:user_name], 
        first_name: user[:first_name], 
        last_name: user[:last_name],        
        password_digest:hash,
        location_id:locations.sample.id,
        admin: [true,false].sample        
    )  
end
puts "Done with users👨."


users = User.all

#######################################
# sellers
#######################################
puts "Creating Sellers..."
Seller.destroy_all
10.times do |i|
    first_name = Faker::Name.first_name
    last_name =  Faker::Name.last_name    
    email_address = "#{first_name}_#{last_name}@gmail.com"     
    Seller.create(       
        first_name:first_name, 
        last_name:last_name, 
        email_address: email_address, 
        location_id:locations.sample.id,
        phone_number: "+254 717 123 456"        
    )    
end
puts "Done with sellers"

sellers = Seller.all
#######################################
# Properties
#####################################
puts "Creating 10 Properties...."
Property.destroy_all
size = ["100 by 100", "100 by 50"]
10.times do |i|
    location = locations.sample
    property = Property.create!(
        type_id: all_types.sample.id,
        address: "#{location.county}, #{location.name}", 
        location_id: location.id,         
        beds: (1..5).to_a.sample, 
        baths: (1..4).to_a.sample,     
        fore_closure: false,
        price:(1500000...5000000).to_a.sample,
        seller_id: sellers.sample.id,
        description: Faker::Lorem.paragraph,
        notes: Faker::Lorem.sentence,
        size: size.sample,
        image_url: "https://ssl.cdn-redfin.com/photo/45/bigphoto/928/OC22191928_1.jpg"
    )

end
puts "Done with Properties"
properties = Property.all



#######################################
# Buyers
#####################################
puts "Creating Buyers..."
Buyer.destroy_all
10.times do |i|
    first_name = Faker::Name.first_name
    last_name =  Faker::Name.last_name    
    email_address = "#{first_name}_#{last_name}@gmail.com"     
    Buyer.create(       
        first_name:first_name, 
        last_name:last_name, 
        email_address: email_address    
    )    
end
puts "Done with Buyers"

#######################################
# UserProperties
#######################################
puts "Creating user_properties..."
UserProperty.destroy_all

10.times do |i|   
    p users.sample.id
    p properties.sample.id
    p Faker::Lorem.sentence 
    user_property = UserProperty.create!(       
        property_id:properties.sample.id, 
        user_id:users.sample.id, 
        notes:Faker::Lorem.sentence               
    ) 
    
end
puts "Done with user_properties"

#######################################
# property images
#####################################
puts "Creating Property Images..."
PropertyImage.destroy_all
images = [
    "https://ssl.cdn-redfin.com/photo/45/bcsphoto/917/genBcs.SB22189917_3_0.jpg",
    "https://ssl.cdn-redfin.com/photo/45/mbphoto/928/genMid.OC22191928_11_1.jpg",
    "https://ssl.cdn-redfin.com/photo/45/bcsphoto/917/genBcs.SB22189917_3_0.jpg",
    "https://ssl.cdn-redfin.com/photo/41/bcsphoto/311/genBcs.SR22208311_1_0.jpg",
    "https://ssl.cdn-redfin.com/photo/45/bcsphoto/460/genBcs.IV22199460_2_0.jpg",
    "https://ssl.cdn-redfin.com/photo/45/bcsphoto/579/genBcs.IV22196579_1_1.jpg"
]
10.times do |i|      
    PropertyImage.create!(
        property_id: properties.sample.id, 
        image_url: images.sample
    )

end
puts "Done with Property Images"

# ========================================================================
# FAQs
# ===============
puts "FAQs..."
Faq.create(question: "How does the Free Trial work?", response: "Simply sign up and your 3-Day Free Trial will begin automatically. To continue after the trial, do nothing – we’ll charge your card at the end of the trial and your subscription will continue uninterrupted.")
Faq.create(question: "Which states and counties does Property Finder cover?", response: "Property Finder provides nationwide coverage. Property Finder Coverage shows the specific counties we cover in each state, as well as other details about the specific data offered in each location.")
Faq.create(question: "Can I cancel anytime?", response: "Absolutely. After you cancel you will receive an email confirmation, please keep this email as proof of your cancellation.")
Faq.create(question: "Can I change my subscription plan anytime?", response: "Absolutely! You can change your subscription to a plan that best meets your needs anytime.")
Faq.create(question: "Do you offer discounts on subscription fees?", response: "Yes! Depending on the package you can save roughly 20% with an annual term plan when paid in full & upfront. You can start monthly and switch to an annual payment plan at any time.")
Faq.create(question: "When will I get billed?", response: "If you do not cancel during your trial your credit card will be charged after 3 days.")
Faq.create(question: "What if I no longer have access to the email I have used with my previous subscription?", response: "Please contact Support and we’ll help you get reconnected to your former account.")
