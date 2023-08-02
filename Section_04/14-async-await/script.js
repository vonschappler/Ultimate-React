// --------------------------
// Working with Async/Await
// --------------------------

const API = 'https://jsonplaceholder.typicode.com/todos/1';

async function getTodos() {
  const res = await fetch(API);
  const data = await res.json();
  return data;
}

const todosNotAwait = getTodos();
// This will return a pending promise
console.log(todosNotAwait);
console.log('This will be printed before the promise is resolved or rejected!');

// This will
const todosAwait = await getTodos();
console.log(todosAwait);

console.log(
  'This will be printed just after the promise is resolved or rejected'
);
