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
    zip: 94123
},
{
  name: 'Emeryville Community Organic Garden',
  image: 'https://i.imgur.com/2nwo9Bb.jpg',
  map: 'https://www.google.com/maps/place/Doyle+St+%26+59th+St,+Emeryville,+CA+94608/@37.8416459,-122.2901944,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e67f7edae89:0x876f05f02104613a!8m2!3d37.8416417!4d-122.2880057',
  address: '59TH St And Doyle St',
  state: 'CA',
  city: 'Emeryville',
  zip: 94608
},
{
  name: 'Argonne Community Garden',
  image: 'https://i.imgur.com/kvaDJtZ.jpg',
  map: 'https://www.google.com/maps/dir//Argonne+Community+Garden,+San+Francisco,+CA+94118/@37.774001,-122.4762682,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8085876b4ebd788f:0xf07b0ab394ade008!2m2!1d-122.4739237!2d37.7741184!3e0',
  address: 'Between 15th & 16th Ave',
  state: 'CA',
  city: 'San Francisco',
  zip: 94118
},
{
  name: 'City Slicker Farms',
  image: 'https://i.imgur.com/rC9ySZa.png',
  map: 'https://www.google.com/maps/place/City+Slicker+Farms/@37.8220242,-122.2880418,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e1729e144f1:0x746c5b549756dab6!8m2!3d37.82202!4d-122.2858531',
  address: '2847 Peralta St',
  state: 'CA',
  city: 'Oakland',
  zip: 94608
},
{
  name: 'Potrero Hill Community Garden',
  image: 'https://i.imgur.com/6Y4OoaN.png',
  map: 'https://www.google.com/maps/place/Potrero+Hill+Community+Garden/@37.759474,-122.4072941,16.88z/data=!4m5!3m4!1s0x808f7e35b34b7ab9:0xd9fb7a6eb3ef2876!8m2!3d37.7598058!4d-122.4052843',
  address: '780 San Bruno Ave',
  state: 'CA',
  city: 'San Francisco',
  zip: 94107
},
{
  name: 'Cadillac Urban Gardens on Merritt',
  image: 'https://i.imgur.com/M1jJfJc.png',
  map: 'https://www.google.com/maps/place/Cadillac+Urban+Gardens+on+Merritt/@42.3245359,-83.1039817,17z/data=!4m5!3m4!1s0x883b32c0185c2323:0x8932e1855bf17c0c!8m2!3d42.324532!4d-83.101793',
  address: '4601 Merritt St',
  state: 'MI',
  city: 'Detroit',
  zip: 98209
},
{
  name: 'The Michigan Urban Farming Initiative',
  image: 'https://i.imgur.com/A3VaUwJ.png',
  map: 'https://www.google.com/maps/place/The+Michigan+Urban+Farming+Initiative/@42.3733219,-83.0715753,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d28576911423:0x998f5bb6f2f612ca!8m2!3d42.373318!4d-83.0693866',
  address: '7432 Brush St',
  state: 'MI',
  city: 'Detroit',
  zip: 48202
},
{
  name: 'Earthworks Urban Farm',
  image: 'https://i.imgur.com/hpkAfGE.png',
  map: 'https://www.google.com/maps/place/Earthworks+Urban+Farm/@42.351022,-83.0148823,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d33f58be2795:0xedd5e884f1e0addc!8m2!3d42.3510181!4d-83.0126936',
  address: '1264 Meldrum St',
  state: 'MI',
  city: 'Detroit',
  zip:  48207
},
{
  name: 'North Cass Community Garden',
  image: 'https://i.imgur.com/Gw9CUXH.png',
  map: 'https://www.google.com/maps/place/North+Cass+Community+Garden,+W+Willis+St,+Detroit,+MI+48201/@42.3494013,-83.0681084,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d2b0574272bd:0xfe170f97e28edb12!8m2!3d42.3493712!4d-83.0659196',
  address: 'W Willis St',
  state: 'MI',
  city: 'Detroit',
  zip:   48201
},
{
  name: 'Oakland Avenue Urban Farm',
  image: 'https://i.imgur.com/CBPYnnO.png',
  map: 'https://www.google.com/maps/place/Oakland+Avenue+Urban+Farm/@42.3880062,-83.0752958,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d27bd1ccfc07:0x4a9963f99de66ef6!8m2!3d42.3880023!4d-83.0731071',
  address: '9227 Goodwin St',
  state: 'MI',
  city: 'Detroit',
  zip:  48211
},
{
  name: 'Pike Place Urban Garden',
  image: 'https://i.imgur.com/D0bMNOb.png',
  map: 'https://www.google.com/maps/place/Pike+Place+Urban+Garden/@47.6083693,-122.3427914,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab25ee27d5f:0x2d7ccd3e79655fcd!8m2!3d47.6083657!4d-122.3406027',
  address: ' 81 Pike St',
  state: 'WA',
  city: 'Seattle',
  zip:  98101
},
{
  name: 'Seattle Urban Farm Company',
  image: 'https://i.imgur.com/lgMrJpF.png',
  map: 'https://www.google.com/maps/place/Seattle+Urban+Farm+Company/@47.6670628,-122.3746102,17z/data=!3m1!4b1!4m5!3m4!1s0x549016b488d267cd:0x40c99e94e9657207!8m2!3d47.6670592!4d-122.3724215',
  address: '1125 NW 53rd St',
  state: 'WA',
  city: 'Seattle',
  zip:  98107
},
{
  name: 'Beacon Food Forest',
  image: 'https://i.imgur.com/ee46lrN.png',
  map: 'https://www.google.com/maps/place/Beacon+Food+Forest/@47.5678242,-122.3144024,17z/data=!3m1!4b1!4m5!3m4!1s0x549041d6258a23bd:0x16d1cc0dda479716!8m2!3d47.5678206!4d-122.3122137',
  address: 'S Dakota St',
  state: 'WA',
  city: 'Seattle',
  zip:  98108
},
{
  name: 'Interbay P-Patch Community Garden',
  image: 'https://i.imgur.com/drxPThW.png',
  map: 'https://www.google.com/maps/place/Interbay+P-Patch+Community+Garden/@47.6412046,-122.3791896,17z/data=!3m1!4b1!4m5!3m4!1s0x549015766270123d:0xdb8fdd9af65e7d04!8m2!3d47.641201!4d-122.3770009',
  address: '2451 15th Ave W',
  state: 'WA',
  city: 'Seattle',
  zip:  98119
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

const seedPosts = () => {
  db.Post.deleteMany({}, (err, deletedPosts) => {
    db.Post.create(posts, (err, seededPosts) => {
      if (err) console.log(err);
      console.log(seededPosts.length + ' posts seeded.')
      process.exit()
    })
  })
}
// const seedDB = () => {
//   db.Garden.deleteMany({}, (err, deletedGardens) => {
//     db.Garden.create(gardens, (err, seededGardens) => {
//       if (err) console.log(err);
//       console.log(seededGardens.length + ' Gardens seeded')
//       process.exit()
//     })
//   });
// }

// seedDB()
// seedPosts()
