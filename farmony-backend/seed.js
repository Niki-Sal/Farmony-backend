const db = require('./models');

// const examples = [
//   { name: 'Example 1', completed: true}, 
//   { body: 'Example 2', completed: false}
// ];
//const oneExample = { name: 'Example 3', completed: true };

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
}
]


const addManyGardens = async () => {
  const savedGardens = await db.Garden.insertMany(gardens);
  console.log('=======> Saved Gardens.');
  console.log(savedGardens)
}

// const addOneExample = async () => {
//   const savedOneExample = await db.Example.create(oneExample);
//   console.log('=======> Saved One Example.');
//   console.log(savedOneExample);
// }

// run the functions
addManyGardens();
// addOneExample();