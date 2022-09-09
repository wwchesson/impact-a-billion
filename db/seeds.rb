puts "Seeding y'all..."

10.times do (
    Impacter.create(
        username: Faker::Internet.username,
        password: "please",
        type: "Impacter",
        name: Faker::Name.name,
        email: Faker::Internet.safe_email,
        zip: Faker::Address.zip,
        skills: "River clean up",
        availability: "Sat and Sun 10:00-14:00",
        travel_radius: 10,
        token_points: 0,
        admin: false,
        image: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/241864559_10109007505832928_6553380397641046999_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GXZoYlMKp5gAX9PHKVO&tn=9oAIlzQ3iY3s6dVI&_nc_ht=scontent-atl3-2.xx&oh=00_AT_G0gGizA8F6n1sdg752eJUeGFoRUNbAVLRtyOeK-g2aQ&oe=6313FC7D",
        birthdate: Faker::Date.birthday(min_age: 16, max_age: 70)
    )
)
end

5.times do (
    Organizer.create(
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password,
        type: "Organizer",
        name: Faker::Name.name,
        email: Faker::Internet.safe_email,
        zip: Faker::Address.zip,
        skills: "Working with homeless youth",
        availability: "Tues and Thurs 18:00-20:00",
        travel_radius: 10,
        org_name: "Clairmont Urban Gardens",
        admin: false
    )
)
end

Event.create(name: "Revamp urban garden", description: "The beds need fixing and weeding.", location: "Atlanta Westside", category: "Gardening", completed:false, carescape_id: 1, organizer_id: 11, date: Faker::Time.forward(days: 30, period: :evening, format: :long))

Carescape.create(api_address: "www.aiart.org", comments: "Such a good piece", likes: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVBG-gLrwqT_ZbUTjoHbgahHy1h2Qtx28xw&usqp=CAU")

ImpacterEvent.create(event_id: 1, impacter_id: 1)


puts "Done seeding"
