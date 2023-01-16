# # # This file should contain all the record creation needed to seed the database with its default values.
# # # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# # #
# # # Examples:
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
        "name": "Nairobi",
        "code": 1,
        "capital": "Karen"
    }, 
    {
        "name": "Kiambu",
        "code": 2,
        "capital": "Eden Ville Estate"
    }, 
    {
        "name": "Kiambu",
        "code": 3,
        "capital": "Hidden Creek Estate"
    }, 
    {
        "name": "Nairobi",
        "code": 4,
        "capital": "Muthaiga"

    }, 
    {
        "name": "Kiambu",
        "code": 5,
        "capital": "Runda Palm Gardens Estate"
    }, 
    {
        "name": "Nairobi",
        "code": 6,
        "capital": "Lavington"
    }, 
    {
        "name": "Kiambu",
        "code": 8,
        "capital": "Migaa Golf Estate"
    }, 
    {
        "name": "Nairobi",
        "code": 7,
        "capital": "Kileleshwa"
    }, 
    {
        "name": "Kiambu",
        "code": 9,
        "capital": "Runda Paradise 1 Estate"
    }, 
    {
        "name": "Nairobi",
        "code": 10,
        "capital": "Kilimani"
    },
    {
        "name": "Nairobi",
        "code": 11,
        "capital": "Mountain-view"
    },
    {
        "name": "Nairobi",
        "code": 12,
        "capital": "SpringValley"
    },
    {
        "name": "Nairobi",
        "code": 13,
        "capital": "Kitusuru"
    },
    {
        "name": "Nairobi",
        "code": 14,
        "capital": "Westlands"
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
types = ["Apartment","Mansionette"]
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
    User.create!(
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
image_url = [
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
"https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
"https://images.unsplash.com/photo-1600047509782-20d39509f26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
"https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1602941525346-b707b1cbe7fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80",
"https://thumbs.dreamstime.com/z/beautiful-house-kenya-karen-blixsen-41019413.jpg",
"https://thumbs.dreamstime.com/b/apartment-house-beautiful-entrance-porch-flower-bed-apartment-house-beautiful-entrance-porch-flower-bed-111319201.jpg",
"https://thumbs.dreamstime.com/b/modern-residential-house-africa-fence-accommodation-kenya-magnificent-cityscape-175586684.jpg",
"https://thumbs.dreamstime.com/b/loldia-house-19163567.jpg",
"https://thumbs.dreamstime.com/b/holiday-bungalows-kenya-swimming-pool-outside-traditional-makuti-roof-against-blue-skies-77084950.jpg",
"https://thumbs.dreamstime.com/b/town-voi-panorama-kenya-surrounding-nature-east-africa-84419476.jpg",
"https://thumbs.dreamstime.com/b/stone-house-plants-flowers-located-kenya-sunny-day-40921299.jpg",
"https://thumbs.dreamstime.com/b/stone-house-plants-flowers-located-kenya-sunny-day-40919492.jpg",
"https://thumbs.dreamstime.com/b/house-african-homes-palm-trees-shroud-kenya-41375705.jpg",
"https://thumbs.dreamstime.com/b/african-house-tipical-villa-kenya-88647179.jpg",


]
10.times do |i|
    location = locations.sample
    property = Property.create!(
        type_id: all_types.sample.id,
        address: "#{location.name}", 
        location_id: location.id,         
        beds: (1..5).to_a.sample, 
        baths: (1..4).to_a.sample,     
        fore_closure: false,
        price:(1500000...5000000).to_a.sample,
        seller_id: sellers.sample.id,
        description: Faker::Lorem.paragraph,
        notes: Faker::Lorem.sentence,
        size: size.sample,
        image_url: image_url.sample
        # image_url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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