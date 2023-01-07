# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

puts "Planting 🌱..."

puts "Creating 10 users and profiles 👨.."
User.destroy_all
Profile.destroy_all
roles = ["Admin","Buyer","Seller","CustomerCare"]
10.times do |i|  
    username = Faker::Name.unique.name 
    first_name = Faker::Name.first_name
    last_name =  Faker::Name.last_name
    email = "example#{i}@example.com"
    hash = BCrypt::Password.create("password")
    user= User.create(
        username:username, 
        first_name:first_name, 
        last_name:last_name, 
        email:email, 
        password_digest:hash
    )
    Profile.create(
        user_id:user.id,
        role:roles.sample
    )
end

puts "Creating properties...🏡"
Property.destroy_all
puts "Getting all users who are sellers"
sellers = User.joins(:profile).where(profiles: { role: 'Seller' })

all_properties = [{
    user_id: sellers.sample.id,
    location: "Kiambu",
    price: 16000,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzI8lKOFjUtx-SEFtq_M3EA1pM8NOnKxjtKZxGs-cmKxAuZS20uKzYix_OSYPwq5mSEQ0&usqp=CAU",
    description: ""
},
{
    user_id: sellers.sample.id,
    location: "Westlands",
    price: 30000,
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCGewHDEpFWJSiJ5rqkbdLdwigyBQXfn6l6kZsMqkQmO9tcSnTnTmT28B3-wBcebRHr0&usqp=CAU" ,
    description: " "
},
{
    user_id: sellers.sample.id,
    location: "Thika Road",
    price: 17000,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVLk-jpjwZIaAGzbufINQBQhr6C7knDf6W6eUZr1Qw96pnag9W_3PXL-YmKoy___6lcc&usqp=CAU",
    description: ""
},
{
    user_id: sellers.sample.id,
    location: "Kiambu",
    price: 16000,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRoyxz9LoOG3i-Rn6It78sgjKCd6VbrAPfg&usqp=CAU",
    description: "You’ll find tasteful updates throughout this recently renovated, stunning home. Schedule a tour today!" 
},
{
    user_id: sellers.sample.id,
    location: "Kilimani",
    price: 35000,
    image_url: "https://www.tysons.co.ke/wp-content/uploads/2019/10/mi-vida-tysons-limited-4.jpg",
    description: "" 
},
{
    user_id: sellers.sample.id,
    location: "Kitengela",
    price: 24000,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1FGC98ls-738d2BZmgbcNAkckHOtaLu8pw&usqp=CAU" ,
    description:"This move-in ready home has been recently updated, including new windows that provide ample of natural light. Enjoy the shaded backyard or walk to the neighborhood park down the street." 
},
{
    user_id: sellers.sample.id,
    location: "Ngong Road",
    price: 20000,
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9ieIPfAzdkRsyQrL4qETVNuVzz3Wi97aO1f6-M6hkwPh3OUXb-i6_5-_oQmLEPHTWAQ&usqp=CAU" ,
    description: "This stunning two-story home is on a large lot in a hot neighborhood. From the open-concept kitchen and living space to the large shaded backyard, there is plenty of room for the whole family to enjoy. Recent updates include new carpeting upstairs and stainless appliances. Situated in a family-friendly neighborhood near a great park, this home is sure to go fast!"
}]
all_properties.length.times do |i|
    new_property = all_properties[i]    
    Property.create!(new_property)
end
puts "Done with Properties..."
