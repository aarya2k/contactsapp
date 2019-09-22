# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

contacts = [
    [ "Arun", 8183001000, "Atlanta" ],
    [ "Akash", 6544700374, "Newyork" ],
    [ "Aravind", 1000839905, "Dallas" ],
    [ "Aarya", 1668000000, "Sanfrancisco" ]
]

contacts.each do |name, telephone, address|
  Contact.create( name: name, telephone: telephone,address: address)
end

