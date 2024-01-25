// --------------------------
// Working with promises
// --------------------------

const API = 'https://jsonplaceholder.typicode.com/todos';
fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(console.error('Some error handler message or function...'));

console.log(
  'This will happen fisrt because the promise is still running on background and being processed.\n\nPromisses are asyncronous'
);
