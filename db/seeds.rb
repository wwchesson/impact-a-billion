puts "Seeding y'all..."

10.times do (
    Impacter.create(
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password,
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
        admin: true
    )
)
end



puts "Done seeding"
