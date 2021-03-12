const db = require('./models');

const users = [{
  name: "user2",
  email: "user2@gmail.com",
  password: "qwertyuiop"
}]

const gardens =[
  {
    name: 'Fort Mason Community Garden',
    image: 'https://i.imgur.com/ylD3OFJ.jpg',
    map: 'https://www.google.com/maps/place/Community+Garden,+Pope+Rd,+San+Francisco,+CA+94109/@37.8060919,-122.4305515,17z/data=!3m1!4b1!4m5!3m4!1s0x808580df157d8e35:0x6523e87933f1fdb0!8m2!3d37.8060774!4d-122.4284982https://www.google.com/maps/place/Doyle+St+%26+59th+St,+Emeryville,+CA+94608/@37.8416459,-122.2901944,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e67f7edae89:0x876f05f02104613a!8m2!3d37.8416417!4d-122.2880057',
    address: 'Upper Fort Mason',
    state: 'CA',
    city: 'San Francisco',
    zip: 94123,
    about:'In the early 1970s, Ruth Asawa, Ann-Marie Thielen, and other artists and community activists organized the San Francisco Art Commission.  One of its goals was to promote community gardening in San Francisco, with an emphasis on bringing gardening to public school children.' ,
    review:['"The views are amazing. The day was perfect, not to cold and the sun was shinning brightly. There was a slight breeze but not to windy.We walked all over and looked at the flowers and the views. We stumbled upon some guys sitting at the stairs who had parked their bikes and were drinking a beer overlooking the bay. Made me wish I brought some beers to enjoy the moment with.The Sweet Peas and other climbing vines were in full force of dark pinks and bright oranges."','"I love this place!  I wish I had a green thumb so I could have a small plot here to have a garden of my own.  What an ingenious idea to have a community garden in this City of apartments and condos with limited or no yards so that garden-plots can be enjoyed and tended to."', '"This place is a hidden gem.  We stumbled across it on our way back to the car parked nearby after attending Off the Grid for dinner last summer.  Even my friend who lives in SF didn\'t know about it.  The place is peaceful, with lots of plots with veggies (some huge squash!), flowers, plants, some fruit trees in the back.  There were a few other people there--visiting also or tending their plot?"']
    
},
{
  name: 'Emeryville Community Organic Garden',
  image: 'https://i.imgur.com/2nwo9Bb.jpg',
  map: 'https://www.google.com/maps/place/Doyle+St+%26+59th+St,+Emeryville,+CA+94608/@37.8416459,-122.2901944,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e67f7edae89:0x876f05f02104613a!8m2!3d37.8416417!4d-122.2880057',
  address: '59TH St And Doyle St',
  state: 'CA',
  city: 'Emeryville',
  zip: 94608,
  about: 'The gardens provide residents with space to grow their own food, herbs and flowers. They are common space for the people of Emeryville to come together in nature, providing refuge and a sense of community. The gardens occasionally host workshops, tours and other events to promote the benefits of community gardening and organic food.',
  review: ['"The Emeryville Community Organic Garden, ECOG, is a huge bonus to living in Emeryville. With the diminutive size of most condos, it\'s great to have a little outside space to plant some veggies and take in the air."', '"We love to walk through this garden whenever we are in the neighborhood.  It\'s fun to look at what each plot has chosen to grow and wonder why they grow what they grow."', '"Total fan! I used to take my dogs around here for walks. They love all the scents that come from this garden. It\'s fascinating to see where the food comes from and how food is grown. I would recommend this place to families and kids who would like to learn more about this organization or visit this garden."']
},
{
  name: 'Argonne Community Garden',
  image: 'https://i.imgur.com/kvaDJtZ.jpg',
  map: 'https://www.google.com/maps/dir//Argonne+Community+Garden,+San+Francisco,+CA+94118/@37.774001,-122.4762682,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8085876b4ebd788f:0xf07b0ab394ade008!2m2!1d-122.4739237!2d37.7741184!3e0',
  address: 'Between 15th & 16th Ave',
  state: 'CA',
  city: 'San Francisco',
  zip: 94118,
  about:'Come reclaim your sanity by visiting this peaceful and beautiful community garden. Argonne garden has a full of an array of flowers and overflowing organic vegetables in individual plots. I have a plot here with sweet peas, green beans, chard, zucchini, spinach, lettuce, carrots, with yellow, orange, white and coral pink poppys lining the frame. I love caring for my ever growing plants, and being able to harvest and get sustenance from food I grew myself. There\'s nothing like it.  The garden is a fun and safe place for kids to explore in nature, look for bugs and get their hands in the dirt. The micro climate in the outer Richmond is cooler, so bring a sweatshirt. After you visit the garden you can zip down Fulton to the beach which is only five minutes away.',
  review: ['"With around 40 plots and some of the neighborhood\'s characters tending, I couldn\'t ask for a better spot to attempt growing some peas, lettuce, and basil. While I did find one gardener walking his cat on a leash through the tiny greenhouse onsite, everyone\'s been full of humor and kindness.The garden\'s open for anyone to go visit and the plots are only $35 for a the whole year. And unlike a bunch of other community gardens that I looked into, I was able to get a space immediatley."']
},
{
  name: 'City Slicker Farms',
  image: 'https://i.imgur.com/rC9ySZa.png',
  map: 'https://www.google.com/maps/place/City+Slicker+Farms/@37.8220242,-122.2880418,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e1729e144f1:0x746c5b549756dab6!8m2!3d37.82202!4d-122.2858531',
  address: '2847 Peralta St',
  state: 'CA',
  city: 'Oakland',
  zip: 94608,
  about: 'City Slicker Farms began with a mission to empower West Oakland community members to meet the basic need for fresh, healthy food by creating sustainable, high-yield urban farms and backyard gardens. Since its founding in 2001, City Slicker Farms has been at the forefront of the 21st-century sustainable urban farming and food justice movement, gaining national recognition as a leader in supporting low-income communities of color to grow food in the city. In the last 20 years, we have built over 550 backyard and community gardens, produced 300,000 pounds of nutrient rich food, and trained thousands of community members in organic gardening methods and environmental stewardship.',
  review:['"have a plot here now finally and it\'s just a wonderful, wonderful place. I\'ve volunteered in their main gardens where they grow produce for the community and I recommend children and adults, families and couples, seniors and singles to come and walk around, look at the gardens, chickens, bees and participate in their numerous activities, even now during the COVID logistical limitations."','"They are a wonderful place for the garden supplies that my residents need for their gardens. Seedlings, compost, instructions and support all the way around.  It really helps especially during this time with what we are going through."','"Incredible environment, their land stewardship is absolutely incredible and the place just screams ABUNDANCE! I was thrilled to meet the farm manager Joseph, he was incredibly accommodating, insightful and passionate. I look forward to visiting this morning for the weekly farmers market See you there!"']
},
{
  name: 'Potrero Hill Community Garden',
  image: 'https://i.imgur.com/6Y4OoaN.png',
  map: 'https://www.google.com/maps/place/Potrero+Hill+Community+Garden/@37.759474,-122.4072941,16.88z/data=!4m5!3m4!1s0x808f7e35b34b7ab9:0xd9fb7a6eb3ef2876!8m2!3d37.7598058!4d-122.4052843',
  address: '780 San Bruno Ave',
  state: 'CA',
  city: 'San Francisco',
  zip: 94107,
  about:' By 1971 two Potrero Hill residents, a meticulous Italian gardener and a Filipino who could grow anything, had begun squatters gardens on this land Lorraine Vinson, one of the founding gardeners, has had a plot here fore more than 30 years. She remembers that the gardeners began meeting as a group around 1972. The land, owned by the Recreation and Parks Department, has been a part of the Community Garden Program for many years. Each of the fifty plots is tended by neighbors using only organic methods and the gardeners commit to sharing the upkeep of the common areas, shade garden, and the sidewalk landscapes. We welcome you to visit our garden, one of the few open and unlocked Community Gardens in our city. We trust that you will enjoy the beauty and the view, but please resist the temptation to pick our flowers or produce. Many of us toil for months to produce vegetables that we depend on to help us feed our families.',
  review:['"The rose garden is amazing in the summer months - the camellia forest during the rest of the year is equally beautiful.  I highly recommend getting the yearly membership - it allows you access to many gardens throughout the US.  Wandering the gardens is a great way to relax - a true escape from the concrete and hurry.  They also have programs like yoga and pilates.  Children can also enjoy a train ride.  Overall a great escape."','"Amazing community garden. Beautiful park nearby and the most amazing views of all community gardens. Gardeners are super friendly to talk to. When you are finished visiting, you can drive down the REAL crookedest street in SF - Vermont Street!"','"Nice views, calm peaceful place, meditative Oasis in the midst of urban madness."']
},
{
  name: 'Cadillac Urban Gardens on Merritt',
  image: 'https://i.imgur.com/M1jJfJc.png',
  map: 'https://www.google.com/maps/place/Cadillac+Urban+Gardens+on+Merritt/@42.3245359,-83.1039817,17z/data=!4m5!3m4!1s0x883b32c0185c2323:0x8932e1855bf17c0c!8m2!3d42.324532!4d-83.101793',
  address: '4601 Merritt St',
  state: 'MI',
  city: 'Detroit',
  zip: 98209,
  about: 'Cadillac Urban Gardens on Merritt is a Southwest Detroit community vegetable garden run by our Southwest Detroit community, our friends at SDEV, and our amazing partners. Our produce is always free!',
  review:['"The garden was beautiful and SDEV continues to show love for the community. We had a great student to show us as round."','"Friendly environment and always satisfying answers to Resources in the community."','"Beautiful garden that is making the most of its opportunity to make a big impact on the community!"']
},
{
  name: 'The Michigan Urban Farming Initiative',
  image: 'https://i.imgur.com/A3VaUwJ.png',
  map: 'https://www.google.com/maps/place/The+Michigan+Urban+Farming+Initiative/@42.3733219,-83.0715753,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d28576911423:0x998f5bb6f2f612ca!8m2!3d42.373318!4d-83.0693866',
  address: '7432 Brush St',
  state: 'MI',
  city: 'Detroit',
  zip: 48202,
  about: 'Using agriculture as a platform to promote education, sustainability, and community—while simultaneously reducing socioeconomic disparity—we hope to empower urban communities.',
  review:['"This place is a jewel. The feeling is enchanting. So much beauty. It\'s like finding your pot of gold while you\'re not looking. The people are earthy and knowledgeable. You can tell they do this as a labor of love. God bless them for being a blessing to so many. It\'s like walking into a children\'s book! So much flavor!! Most importantly,  I was so proud to see such a diverse group of young people from all types of cultures and social economic backgrounds rolling up their sleeves to provide healthy and organic food  choices to families and the elderly in Detroit urban communities. You guys rock!!"','"Amazing place to receive fresh just picked vegetables in the heart of a very depressed battered neighborhood. Great beacon of hope. Thousands of volunteers from all over the world make a pilgrimage here all summer long. A new favorite place to visit and stay healthy with many varieties of common vegetables"','"Great place for produce but also it is a great educational experience for the students of the school it is attached to and the produce that you buy helps the childrens education"']
},
{
  name: 'Earthworks Urban Farm',
  image: 'https://i.imgur.com/hpkAfGE.png',
  map: 'https://www.google.com/maps/place/Earthworks+Urban+Farm/@42.351022,-83.0148823,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d33f58be2795:0xedd5e884f1e0addc!8m2!3d42.3510181!4d-83.0126936',
  address: '1264 Meldrum St',
  state: 'MI',
  city: 'Detroit',
  zip:  48207,
  about: 'Earthworks Urban Farm seeks to promote sustainable agricultural practices, nutrition and care for the Earth. It is a working study in social justice, as well as in being more connected to the food we eat.',
  review: ['"They care about the community, they help gardeners of all kinds,they teach everything you\'d want to learn about home growing, they\'re kind and generous...I could go on and on"','"Impressive place. A certified organic vegetable farm in the heart of Detroit producing much more than food. Well worth your support."','"It\'s a great community place to get your fresh and local vegetables and fruits."']
},
{
  name: 'North Cass Community Garden',
  image: 'https://i.imgur.com/Gw9CUXH.png',
  map: 'https://www.google.com/maps/place/North+Cass+Community+Garden,+W+Willis+St,+Detroit,+MI+48201/@42.3494013,-83.0681084,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d2b0574272bd:0xfe170f97e28edb12!8m2!3d42.3493712!4d-83.0659196',
  address: 'W Willis St',
  state: 'MI',
  city: 'Detroit',
  zip: 48201,
  about: 'North Cass community garden is an example of the urban farm movement that is currently flourishing in Detroit. The garden is situated at the corner of a busy junction on a previously empty lot. For a low fee and a small labour commitment locals can become a member of the garden, which enables them to grow their own crops in the raised beds. The garden also provides a social base for exchanging knowledge on growing food.',
  review: []
},
{
  name: 'Oakland Avenue Urban Farm',
  image: 'https://i.imgur.com/CBPYnnO.png',
  map: 'https://www.google.com/maps/place/Oakland+Avenue+Urban+Farm/@42.3880062,-83.0752958,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d27bd1ccfc07:0x4a9963f99de66ef6!8m2!3d42.3880023!4d-83.0731071',
  address: '9227 Goodwin St',
  state: 'MI',
  city: 'Detroit',
  zip:  48211,
  about: "The nation's first \"Agri-Cultural\" urban landscape in Detroit's North End. The Oakland Avenue Urban Farm, a program of North End Christian Community Development Corporation, is a non-profit,community-base organization dedicated to cultivating healthy foods, sustainable economies, and active cultural environments.",
  review:['"Awesome. It\'s amazing what can be done when vision, creativity, and hard work meet. Great job. We are looking forward to seeing the fruit of your labor this season."','"Had a great time attending the Afrikan Funkestra musical event on the farm for the 2016 Detroit Design Festival. Wonderful cultural event, lovely crowd and great food. Took home some delicious strawberry AfroJam!"','"Inspiring urban farm growing beautiful chemical-free produce. If you live in or near Detroit, you should consider joining their CSA. Keep an eye out for events and tours. Grateful to have seen it."']
},
{
  name: 'Pike Place Urban Garden',
  image: 'https://i.imgur.com/D0bMNOb.png',
  map: 'https://www.google.com/maps/place/Pike+Place+Urban+Garden/@47.6083693,-122.3427914,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab25ee27d5f:0x2d7ccd3e79655fcd!8m2!3d47.6083657!4d-122.3406027',
  address: ' 81 Pike St',
  state: 'WA',
  city: 'Seattle',
  zip:  98101,
  about: 'This secret garden called the Pike Place Urban Garden is the best treasure to be found at the market.  Find yourself lunch, a snack, or a coffee and take a seat with your book, take a date here, ask someone to marry you, or do something special.  It\'s just top notch.  Cute as a button, this is a place where special things and magic happens.  Oh. And the view!',
  review:['"Thanks to people who take care of this garden. We enjoyed it so much. Beautiful and peaceful to get away a little from the crowd."','"Beautiful, quiet, hidden gym. Ask employees of the stores how to get there because it\'s impossible for me to describe. Nice view of the ferris wheel."','"The vegetables grown at this community garden are donated to Pike Place Senior Center and Food Bank. This little nook serves as a nice place to get away from the crowd. There\'s a view of the harbor by the Great Wheel. A few seats are available if you want to sit and have a bite of whatever you purchased from the market!"']
},
{
  name: 'Seattle Urban Farm Company',
  image: 'https://i.imgur.com/lgMrJpF.png',
  map: 'https://www.google.com/maps/place/Seattle+Urban+Farm+Company/@47.6670628,-122.3746102,17z/data=!3m1!4b1!4m5!3m4!1s0x549016b488d267cd:0x40c99e94e9657207!8m2!3d47.6670592!4d-122.3724215',
  address: '1125 NW 53rd St',
  state: 'WA',
  city: 'Seattle',
  zip:  98107,
  about: 'At Seattle Urban Farm Company (SUFCo), we thrive on pioneering new ideas and empowering city dwellers to reap the rewards of urban food production. We believe that sustainable urban agriculture can promote healthy living, environmental stewardship, and stronger communities. We hope that developing economically sound, city-based farming ventures will increase public awareness of agricultural issues and foster a greater appreciation of farmers everywhere.',
  review: ['"Our family has done business with Seattle Urban Farm Co. for over 4 years.  They have always done an excellent job and we go out of our way to recommend them to our friends.  Thanks to Seattle Urban Farm Co., our kids are learning how bountiful the land can be, even in the city."','"These folks do incredible work, and are extremely knowledgeable about everything you might need to know to grow food in your backyard."','"I have really enjoyed working with this company for many projects and they have made me into a better gardener.  They have always responded promptly to my inquiries and the work they have done has been of great quality.  They are also just really nice people to do business with.  They will remain my "go to" garden company!!  Their book is great too."']
},
{
  name: 'Beacon Food Forest',
  image: 'https://i.imgur.com/ee46lrN.png',
  map: 'https://www.google.com/maps/place/Beacon+Food+Forest/@47.5678242,-122.3144024,17z/data=!3m1!4b1!4m5!3m4!1s0x549041d6258a23bd:0x16d1cc0dda479716!8m2!3d47.5678206!4d-122.3122137',
  address: 'S Dakota St',
  state: 'WA',
  city: 'Seattle',
  zip:  98108,
  about: ' Our vision is a world where every community participates in creating local food ecosystems. Beacon Food Forest is a demonstration site and a learning community that reimagines what urban green spaces can offer. Volunteers turned a swath of grass into a vibrant, thriving ecosystem that now provides fresh produce, uplifting beauty, pollinator habitat, healthy soils, climate change mitigation, storm water filtration, educational opportunities, and - perhaps most importantly - a community where everyone is welcome to be, participate, learn and teach.  ',
  review: ['"An awesome food forest - volunteer run that is doing great things for this neighborhood and city! Absolutely beautiful place to visit and I highly recommend volunteering for them!"','"The Beacon Food Forest strikes me as a very thoughtful and open-minded project. The various volunteer groups and grants that are behind this space have a very community-centered approach. There are several areas that are open to foraging, including a double-helix shaped raised bed area, and a raspberry patch (ripe at the time of our visit in June!). There are garden plots which are rented out by community members. Finally, there is a nice rest area structure that folks can use to sit and find some shade."','"Fruit and berries and greens and herbs. The upper half is space for locals to garden, you can contact the Food Forest and apply for space. The lower half is fully open to the public to pick from. The park gets a little bare in winter but you can still find greens and herbs."']
},
{
  name: 'Interbay P-Patch Community Garden',
  image: 'https://i.imgur.com/drxPThW.png',
  map: 'https://www.google.com/maps/place/Interbay+P-Patch+Community+Garden/@47.6412046,-122.3791896,17z/data=!3m1!4b1!4m5!3m4!1s0x549015766270123d:0xdb8fdd9af65e7d04!8m2!3d47.641201!4d-122.3770009',
  address: '2451 15th Ave W',
  state: 'WA',
  city: 'Seattle',
  zip:  98119,
  about:'The giving garden at Interbay P-Patch grows and harvests organic produce for donation to the Ballard Food Bank and Mary\'s Place. Help feed your neighbors, learn to garden, and enjoy fellowship with other gardeners. Monday nights from 5:30 to dusk, mid-March to Halloween. Potluck dinners in the garden after every work party! Make sure to wear close-toed shoes and clothes you can get dirty.',
  review: ['"This is a nice community garden where you can see how well locally grown produce and crops do In the local area. I highly recommend stopping at this patch, then visiting a nursery for Ideas. It\'s also very peaceful here."', '"Close to home. Watch it all grow. Great green thumbers to chat with. Going home with rhubarb and strawberries to make....something DAMN good!"', '"Inter bay p patch rules! It rocks because of the stable long-term gardeners there. Plots are tended."']
}
]
const posts = [
  {
    title: 'Test Post',
    username: 'FarmerJimmy6',
    content: 'Testing...,',
    category: 'Holistic Hub',
    date: Date(),
    comment: []
  },
  {
    title: 'Another Test',
    username: 'KaleKween_',
    content: 'Who\'s got some blueberries?',
    category: 'Holistic Hub',
    date: Date(),
    comment: []
  }


]

// const seedPosts = () => {
//   db.Post.deleteMany({}, (err, deletedPosts) => {
//     db.Post.create(posts, (err, seededPosts) => {
//       if (err) console.log(err);
//       console.log(seededPosts.length + ' posts seeded.')
//       process.exit()
//     })
//   })
// }
const seedDB = () => {
  db.Garden.deleteMany({}, (err, deletedGardens) => {
    db.Garden.create(gardens, (err, seededGardens) => {
      if (err) console.log(err);
      console.log(seededGardens.length + ' Gardens seeded')
      process.exit()
    })
  });
}

seedDB()
// seedPosts()
