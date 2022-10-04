puts "Seeding y'all..."

Impacter.create(username: "jbaldwin", token_points: 3, password: "jbaldwin", type: "Impacter", name: "James Baldwin", email: "jbaldwin@example.com", zip: "30033", skills: "Construction, working with youth", availability: "Tues 18:00-20:00", travel_radius: 10, admin: false, image: "https://m.media-amazon.com/images/M/MV5BMTk5ODc4ODUxOF5BMl5BanBnXkFtZTgwNTg2NDEwMTI@._V1_UY317_CR0,0,214,317_AL_.jpg", birthdate: "09-09-1982")

Impacter.create(username: "dday", token_points: 3, password: "dday", type: "Impacter", name: "Dorothy Day", email: "dday@example.com", zip: "30301", skills: "Donation Organization, Hospice Care", availability: "Sat 10:00-15:00", travel_radius: 5, admin:  false, image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Dorothy_Day%2C_1916_%28cropped%29.jpg", birthdate: "11-8-01980")

Impacter.create(username: "jlewis", token_points: 3, password: "jlewis", type: "Impacter", name: "John Lewis", email: "jlewis@example.com", zip: "30306", skills: "Environmental restoration, mentoring, meal share", availability: "Thurs 16:30-19:30", travel_radius: 15, admin:  false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WxPnxd5N_tkxtr4p-VTDHo2YvtplFNV9zQ&usqp=CAU", birthdate: "2-21-1975")

Impacter.create(username: "amendieta", token_points: 3, password: "amendieta", type: "Impacter", name: "Ana Mendieta", email: "amendieta@example.com", zip: "30307", skills: "Art, yoga, environmental restoration", availability: "Sun 14:00-19:00", travel_radius: 5, admin:  false, image: "https://www.metmuseum.org/-/media/images/perspectives/2021/10/ana-mendieta/ana-mendieta_square.jpg?h=800&amp;iar=0&amp;mw=800&amp;w=800&amp;sc_lang=en&amp;hash=E41B2490F70B5B1A0F6DD9B5C0045BF8", birthdate: "7-16-1990")

######

Organizer.create(username: "mgandhi", password: "mgandhi", type: "Organizer", name: "Mohandas Gandhi", email: "mgandhi@example.com", zip: "30308", skills: "Youth programs, hospice care, reforestation", availability: "Mon, Wed 17:00-21:00", travel_radius: 20, admin:  true, image: "https://i.pinimg.com/564x/46/08/df/4608df9539fad4813604dd57b724ee42.jpg")

Organizer.create(username: "iwells", password: "iwells", type: "Organizer", name: "Ida Wells", email: "iwells@example.com", zip: "30311", skills: "Gardening, donation organization", availability: "Thurs, Sat 10:00-15:00", travel_radius: 10, admin:  true, image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2ODE4MDk1MjkyMjI4NzI5/ida-b-wells-2-sized.jpg")

#####

Request.create(name: "Blessings in a backpack", description: "Our organization makes backpacks with food and necessary items for children", category: "Backpack Prep", hours_requested: 2, user_id: 1, location: "Canton, GA", approved: "pending", frequency: "Weekly", volunteers_needed: 5, image: "https://frederick.blessingsinabackpack.org/wp-content/uploads/sites/14/2021/03/605932cb00b0f.image_.jpg")

Request.create(name: "Westside Urban Gardens", description: "Volunteers needed to work in the greenhouse", category: "AgroEcology", hours_requested: 2, user_id: 2, location: "Atlanta Westside", approved: "pending", frequency: "Weekly", volunteers_needed: 2, image: "https://images.squarespace-cdn.com/content/v1/5810d4f2d482e9e1f1211dfa/1506909870935-8HY3QNYB2XEL6FNHFVBY/Rosario.JPG?format=500w")

Request.create(name: "Habitat Houses", description: "Construct houses for those in need", category: "Construction", hours_requested: 8, user_id: 3, location: "North Druid Hills", approved: "pending", frequency: "Monthly", volunteers_needed: 8, image: "https://www.oregonlive.com/resizer/qG-XaGwdvczGTo0wB2ulAXZX_VY=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2KIPUNH7XVBOTJZ2VNFSYHDAGI.jpeg")

Request.create(name: "Greater Lakes Hospice", description: "Help hospice patients with daily tasks", category: "Hospice Care", hours_requested: 1, user_id: 4, location: "Peoplestown", approved: "pending", frequency: "Daily", volunteers_needed: 10, image: "https://www.vitas.com/-/media/images/hospice-and-palliative-care-basics/about-hospice-care/about-hospice-care-tbnl.ashx?h=330&iar=0&mh=330&mw=345&w=345&hash=4FA6D87B21DA00521FB635666EAA77D7")

####

PastEvent.create(name: "Reading Mentorship", description: "Briarcliff Elementary needs volunteers to help with its literacy program", location: "Toco Hills", category: "Mentoring", date: "Fall 2021", organizer_id: 6, image: "https://www.thegardnerschool.com/wp-content/uploads/2018/08/Reading_With_Children_Daily-1536x1024.jpg")

PastEvent.create(name: "Morningside Reforestation", description: "Help us restore the Atlanta forests.", location: "Morningside Nature Preserve", category: "Reforestation", date: "", organizer_id: 5, image: "https://treetrust.org/wp-content/uploads/2021/08/DSC_0178-768x512.jpg")

PastEvent.create(name: "Soup Kitchen at ATL Mission", description: "Help out with meal prep at the ATL Mission", location: "Shepherd's Inn", category: "Meal Share", date: "Spring 2022", organizer_id: 6, image: "https://i0.wp.com/www.irishcatholic.com/wp-content/uploads/2017/04/SoupKitchen.jpg?w=640&ssl=1")

PastEvent.create(name: "Clean Peachtree River", description: "There is so much debris in the Peachtree River. The deer and bird populations are in decline.", location: "Peachtree River Trailhead", category: "Environmental restoration", date: "Sept 10, 2022", organizer_id: 5, image: "https://cdn.firespring.com/images/e438cef2-64cd-480a-ad5f-7ee1383425e6.jpg")

PastEvent.create(name: "Financial literacy class", description: "Help former inmates balance finances.", location: "Fayetteville, GA", category: "Life skills instruction", date: "Spring 2022", organizer_id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kTmwnaGjWE7M8dF44hfQgOlsqjaoiSHaxA&usqp=CAU")


####
Post.create(likes: 0, user_id: 1, past_event_id: 1, caption: "We love our volunteers!", image: "https://www.thegardnerschool.com/wp-content/uploads/2018/08/Reading_With_Children_Daily-1536x1024.jpg")

Post.create(likes: 0,  user_id: 2, past_event_id: 2, caption: "The forest is happy.", image: "https://treetrust.org/wp-content/uploads/2021/08/DSC_0178-768x512.jpg")

Post.create(likes: 0,  user_id: 3, past_event_id: 3, caption: "I love these guys.", image: "https://i0.wp.com/www.irishcatholic.com/wp-content/uploads/2017/04/SoupKitchen.jpg?w=640&ssl=1")

Post.create(likes: 0, user_id: 4, past_event_id: 4, caption: "The river looks great", image: "https://www.neponset.org/wp-content/uploads/2017/09/20170923_105556-1024x576.jpg")

Event.create(name: "Revamp northside urban garden", description: "The beds need fixing and weeding.", location: "Atlanta Northside", category: "AgroEcology", completed:false, organizer_id: 6, date: "Sept 9, 2022", image: "https://images.squarespace-cdn.com/content/v1/5162d432e4b05c3081699597/1549981578764-CQHVP2MSMQV1MPFYB3OY/raised+beds+smaller.jpg?format=750w")

Event.create(name: "Donation Sorting", description: "Goodwill needs volunteers to sort donations.", location: "East Atlanta", category: "Donation Organization", completed:false, organizer_id: 5, date: "July 10, 2022", image: "https://www.pahomepage.com/wp-content/uploads/sites/91/2018/03/IMG_9732_1519939562991_35583578_ver1.0.jpg?w=876&h=493&crop=1")

Carescape.create(api_address: "www.aiart.org", comments: [], likes: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVBG-gLrwqT_ZbUTjoHbgahHy1h2Qtx28xw&usqp=CAU", past_event_id: 2)

Carescape.create(api_address: "www.aiart.org", comments: [], likes: 0, image: "https://i.ebayimg.com/images/g/qD8AAOSwf~9ZZ9jY/s-l500.jpg", past_event_id: 3)

Carescape.create(api_address: "www.aiart.org", comments: [], likes: 0, image: "https://thumbs.dreamstime.com/z/kids-reading-book-woods-long-chairs-two-children-books-surreal-smoke-underneath-bubbles-air-44476251.jpg", past_event_id: 1)

Carescape.create(api_address: "www.aiart.org", comments: [], likes: 0, image: "https://mterr.files.wordpress.com/2011/10/fashionable-bridge2.jpg?w=500&h=375", past_event_id: 4)

Carescape.create(api_address: "www.aiart.org", comments: [], likes: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmQGRuE39I82FfIK_GV5Wjakj2TUfvlpi9Q&usqp=CAU", past_event_id: 5)

ImpacterEvent.create(event_id: 1, impacter_id: 1)
ImpacterEvent.create(event_id: 1, impacter_id: 2)
ImpacterEvent.create(event_id: 2, impacter_id: 3)
ImpacterEvent.create(event_id: 2, impacter_id: 4)

ImpacterPastEvent.create(past_event_id: 1, user_id: 1)
ImpacterPastEvent.create(past_event_id: 2, user_id: 2)
ImpacterPastEvent.create(past_event_id: 3, user_id: 3)
ImpacterPastEvent.create(past_event_id: 4, user_id: 4)

puts "Done seeding"
