const db = require('./models');

const examples = [
  { name: 'Example 1', completed: true}, 
  { body: 'Example 2', completed: false}
];
const oneExample = { name: 'Example 3', completed: true };

const addManyExamples = async () => {
  const savedExamples = await db.Example.insertMany(examples);
  console.log('=======> Saved Examples.');
  console.log(savedExamples);
}

const addOneExample = async () => {
  const savedOneExample = await db.Example.create(oneExample);
  console.log('=======> Saved One Example.');
  console.log(savedOneExample);
}

// run the functions
addManyExamples();
addOneExample();