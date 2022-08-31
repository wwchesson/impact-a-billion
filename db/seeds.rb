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
        admin: false
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
