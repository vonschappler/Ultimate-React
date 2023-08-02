# Personal notes taken

## Section_01:

Creating a new and online environment to make a simple React Application:

- Open the browser and type `react.new` in the address bar

React is structured into components. Each component is a function and the main component is usally named `App`.
Those components always return a jsx output. JSX is a scripting format that allows returning both html and js on it.

Alongside components, React works with states and effects, which are used to update the page dynamically.

<details>
<summary>First React App on Sandbox</summary>

Code for the first lession found online [here](https://3dvrtc-3000.csb.app/).

</details>

<hr>
<br>

## Section_02:

A quick introduction and overview for the next section.

<hr>
<br>

## Section_03:

### Why front-end frameworks exist?

At the begin, all sites were made using the server-side rendring, where all the code (views/templates and data) where stored and joint together on the server and a set of files were sent to the client as HTML, CSS and JavaScript files. An example for site made this way is **WordPress** and a common library common by that time was **jQuery** which made JavaScript complatible with most browsers.

Developers started creating even more JavaScript to be executed by the browser until it got to the point where single-page full applications were created. On those applications the pages were rendered directly on the client. All the data in this case comes as an API from the server.

Front-end web application is all about **handling data** + **display data** in a way that the UI is sync with the data by using what we call "states", which turns almost imposible to create these applicatio with only vanilla JavaScript code.

- It would require lots of direct DOM manipulation (impreative / spaghetti code)
- Data is usually stored in the DOM, shared across the entire app, which is hard to handle wihtout creating many bugs

So, with based on the considerations above, it's reasonable to say that front-end frameworks exist because:

1. They solve the problem of data in sync with the user interface
1. They enforce a "correct" way of structure for coding
1. They give developers and teams a consistent way of building front-end applications

<hr>

### What is React?

React is a extremely popular declarative, component-based state-driven JavaScript library for building user interfaces, created by Facebook.

- Component based: components are small blocks of user interface (buttons, search bars, input fields, etc), which can be reused by simply changing states when necessary
- Declarative: specify how each component should look like based on the current data/state it's in sync with, by using JSX (a sintax that combines HTML, CSS, JS and even other components)
- State-driven: "React **reacts** to state changes by re-rendering the UI"
- JavaScript library: React is a library because it's just the "view" layer of an web application. In forder to build more complete application, we still need external libraries
- Extremely popular: React is the most used library according to NPM donwloads because big companies adopted React a long time ago

In short, React renders components on a webpage (UI) baded on their current state while keeping this UI in sync with the state by "**reacting**" to those state changes.

### Setting up the development environment

- Adivised code editor: Visual Studio Code
- Advised browser: Chrome
- Advised Node version: 18+

#### VS Code extensions and settings:

<details>
<summary>Extensions</summary>

- ESLint
- Prettier
</details>

<details>
<summary>Settings</summary>

- Default formatter: Prettier - Code formatter
- AutoSave: onFocusChange
- ESLint run: onSave
</details>

<details>
<summary>Snippets</summary>

- Files provided with the course resource
</details>

<hr>

### "Pure React" (using React inside HTML)

To use "pure React" on any website, the following lines need to be added to the HTML file:

```html
<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  crossorigin
></script>
```

then another script below those lines with the react components below it.

The full code for this lesson can be found [here](Section_03/01-pure-react/).

<hr>

### React official documentation

The React documentation can be found at [react.dev](https://react.dev)

<hr>

### Setting up a React Application

Options on how to setup a React projects:

- **Create-React-App**

  This is the complete "starter kit" for React application. With this option everything comes already configured: ESlint, Prettier, Jest, etc.

  This is an old way of creating applications, and because of it, it uses slow and outdated technologias, for example **webpack** for file bundling.

  This is a good way to get started for tutorials or experiments (this will be used in small projects along the course)

- **Vite**

  This is a modern tool with templates for setting up a new React Applications

  This altough require all settings to be done manually, meaning that things such as ESLint have to be set up for each new project/application.

  It uses HMR (hot module repleacement) and bundling to improve page loadings in big application / projects

  It's used for modern "real-world" applications, for being a tool relatived new.

- **React Frameworks**

  It's also possible to make use of React Frameworks such as **Next.js** or **Remix**, as advised in the official documentation in order to create React Applications, because those were built on top of React Library and provide extra functionalities the libary do not have - data fetching and rendering on server-side, for instance.

<hr>

### First "real" Application using React

In order to start a React application using, first it's necessary to navitage to the folder where we wish to create the app, using a terminal / command prompt.

While inside that folder, type the following command:

```powershell
npx create-react-app[@version] <project_name>
```

where, in the command `@version` is the version of create-react-app to be used (as an optional value) and `<project_name>` is the name of the project we are creating.

In this lesson a default application called `pizza-menu` was created and it's files can be found [here](Section_03/02-pizza-menu).

After the application is created, using

```powershell-interactive
npm start
```

will launch the created application.

<hr>

## Section_04:

### Destructuring arrays and objects

Destructuring is useful when we are working with one or more objects that contains multiple attributes or arrays.

Let's see a how would be a code be writen without and with destructyring an object:

<details open>
<summary>Without destructuring</summary>

```javascript
const book = getBook(2);
const title = book.title;
const author = book.author;
const pages = book.pages;
const genres = book.genres;
// and this would continue for each property form the book object
```

</details>

<details open>
<summary>With destructuring</summary>

```javascript
const book = getBook(2)
const {title, author, pages, <attribues...>} = book
```

</details>

**NOTE: Whne destructuring an array, the name of the attribute inside the `{}` need to match the name used during the definition of the object to destructure.**

When destructuring an array, it's important to notice that instead of relying on the attribute name, destructuring relies on the number of items / index of the item to retrieve.

```javascript
const pGenre = genres[0];
const sGenre = genres[1];
// and this would continue for each genre inside the genres array
```

</details>

<details open>
<summary>With destructuring</summary>

```javascript
const [pGenre, sGenre, <attribues...>] = genres
```

</details>

**NOTE: the names given (`pGenre`, `sGenre`, etc.) will assing the values in the order the items are inside the array (`genre[0]`, `*genre[1]*`, and so on).**

The code for this lesson can be found [here](Section_04/01-destructuring/).

### Rest/Spread operator

The rest operator `...` is used to create an additional array which contains all elements in a arrya which were not defined inside a destructured array definition. It's always defined at the end of the destructured definition, as displayed below

```javascript
const [pGenre, sGenre, ...other] = genres;
```

The spread operator is also defined by the `...`, but this one can be used on both arrays and objects, as exemplified below:

<details open>
<summary>Spread used with arrays</summary>

```javascript
const newGenres = [...genres, 'epic fantasy'];
```

</details>

<details open>
<summary>Spread used with arrays</summary>

```javascript
// Creates a new array called newGenres with the item 'epic fantasy' as it last element
const newGenresA = [...genres, 'epic fantasy'];

// Creates a new array called newGenres with the item 'epic fantasy' as it first element
const newGenresB = ['epic fantasy', ...genres];
```

</details>

The placemet of the spread operator is important, because it'll define the postioning of the items added to the new array created

<details open>
<summary>Spread used with objects</summary>

```javascript
const updatedBook = { book, moviePublicationDate: '2001-12-19', pages: 1210 };
```

</details>

When it comes to objects, the spread operator is useful to add new properties to an existing objects or create a new property to them.
When overwriting values of properties of objetcs, the spread object needs to come first.

The code for this lesson can be found [here](Section_04/02-rest-spread/).

### Literals

Literals (<code>``</code>) are part of the features added to ES6. This allows to add JavaScript variables or operations inside a string.

To add any Javascript variable or oparation inside a literal, we use `${}` to create the JavaScript block which will contain the variable or literal inside the literal template started with the backtick.

```javascript
const affirmation = `${title} is a book!`;
```

The code for this lesson can be found [here](Section_04/03-literals/).

### Ternaries

Ternaries are operations with 3 operators: a condition, the result if the condition is satisfied and the result if it's not.

The syntax for this operation is displayed in the example below:

```javascript
pages > 1000 ? '' : ' ';
```

The code for this lesson can be found [here](Section_04/04-ternaries/).

### Arrow Functions (aka expression functions)

Arrow functions is a new way of writing quick and "one line" functions. Those are used mostly as callback functions and in most cases it's advised to store them into a variable.

An example of an arrow function can be seen on the code below:

```javascript
// with blocks - requires the return keyword at the end of the block
const getYearBlock = (str) => {
  const year = str.split('-')[0];
  return year;
};

// without blocks
const getYearNoBlock = (str) => str.split('-')[0];
```

The code for this lesson can be found [here](Section_04/05-arrow-functions/).

### Logical operators and short-circuiting

#### And operator

The And operator (`&&`) short-circuits when the condition checked as the first argument is `false`, automatically returning the the fisrt argument as a result.

```javascript
// No short-circtuing
// prints 'It was true' on the console, while returning the string on the sencond argument as a value
console.log(true && 'It was true');

// Short-circuiting
// prints 'false' on the console, while returning the boolean false as a value, ignoring the second argument
console.log(false && 'It was not true');

// it works with truthy and falsy values also
// prints 'Yes a do have a name!' on the console, while returning the string on the sencond argument as a value
console.log('name' && 'Yes a do have a name!');
// prints 'null' on the console, while returning null as value
console.log(null && 'I do not have a nickname...');
```

#### Or operator

The Or operator (`||`) short-circuits when the condition checked as the first argument is `true`, automatically returning the the fisrt argument as a result. This is mostly used to define default values.

```javascript
// Short-circtuing
// prints 'true' on the console, while returning it as a value
console.log(true || 'It was true');

// No short-circuiting
// prints 'false' on the console, while returning the boolean false as a value, ignoring the second argument
console.log(false || 'It was not true');

// it works with truthy and falsy values also - except the falsy 0
// prints 'name' on the console, while returning 'name' as a value
console.log('name' || 'Yes a do have a name!');
// prints 'I do not have a nickname' on the console, while returning it as value
console.log(null && 'I do not have a nickname...');
```

### Nullish coalescing operator

The Nullish coalescing operator (`??`) short-circuits when the condition checked as the first argument is `true`, automatically returning the the fisrt argument as a result. This is mostly used to define default values. This works as a substitute of `||` for the falsy values `null` and `undefined`, returing everything else as value, no matter the value provided as fisrt argument.

```javascript
// prints '0' on the console, while returning 0 as a value
console.log(0 ?? 'It is a 0 value');

// prints 'null' on the console, while returning null as a value, ignoring the second argument
console.log(null ?? 'Is it null?');
```

The code for this lesson can be found [here](Section_04/06-logical-operators/).

### Optional Chaining

Optional Chaining declarations (`?`) exist in order to specify to our JavaScript code to continue chaining properties from an object only if the previous one was found for the object in question. This is usefull if we are unsure about the existence of a property provided on from a data or an objcet to prevent returning undefined as a value while, simultaneously, setting a default value in case that property does not exist.

```javascript
const person1 = {
  name: 'Alex',
  surname: 'Crimsom',
};
const greeting1 = `Hello ${person1.name} ${
  person1.surname
}! Is your full name ${person1?.fullName ?? 'Joe No One'}?`;
// Because the object person has no property "fullName" and there is the ?? operand here to set the default value to 'Joe No One', the console will print the message:
// 'Hello Alex Crimsom! Is your full name Joe No One?'
console.log(greeting1);

const person2 = {
  name: 'Alex',
  surname: 'Crimsom',
  fullName: 'Alex Paul Crimsom',
};
const greeting2 = `Hello ${person2.name} ${
  person2.surname
}! Is your full name ${person2?.fullName ?? 'Joe No One'}?`;
// Because the object person now has the property "fullName" the console will print the message:
// 'Hello Alex Crimsom! Is your full name Alex Paul Crimsom?'
console.log(greeting2);
```

The code for this lesson can be found [here](Section_04/07-optional-chaining/).

### Array map

The map method will loop through an array and as a result it will return a new array with the same length of the original array, with some operation applied to **EACH** element of the original array.

The map mathod always expect a callback function inside it, just like the exemple below.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByTwo = numbers.map((el) => el * 2);
// This will print the array [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] on the console.
console.log(multiplyByTwo);
```

The code for this lesson can be found [here](Section_04/08-array-map/).

### Array filter

The filter method will loop through an array and as a result it will return a new array with the elements that match the filter condition specified inside the callback function expected by the filter array method.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = numbers.filter((el) => el * 2 >= 10);
// This will print the array [5, 6, 7, 8, 9, 10] on the console.
console.log(filter);
```

The code for this lesson can be found [here](Section_04/09-array-filter/).

### Array reduce

The reduce method "reduces" the original array to a single value by executing the callback function provided with it on it's declaration. It basically loops through the array adding the current array value to the value returned (also know as accumulator - by convention defined as `acc` inside the callback function) on the previous calculation.

The second argument provided is the initial value of the accumulator and it's optional. If that value is not provided, it will default to the first element of the original array.

The sintaxe of the reduce method is displayed on the example below.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const factor = numbers.reduce((acc, el) => el * acc, 1);
// This will print the the value 3628800 on the console.
console.log(factor);
```

The code for this lesson can be found [here](Section_04/10-array-reduce/).

### Array Sort

The sort method, the the name says, will sort an array, organizing it's elements, by default, in ascended order by converting them into strings and comparing their UTF-16 code values, mutating the original array.

There is a small trick which can be done to prevent this mutation by adding the method `slice()` - which will create a copy of the original array - and chaining it to the sort method afterwards.

If a callback function is provided, it will compare the elements base on the rules/calculations made by the callback function.

A basic example of how sort number sintaxe of the sort method is displayed on the example below.

```javascript
const numbers = [3, 7, 10, 9, 6, 1];
const sortAsc = numbers.slice().sort();
const sortDesc = numbers.slice().sort((a, b) => b - a);
// This will print the the value [1, 3, 6, 7, 9, 10] on the console.
console.log(sortAsc);
// This will print the the value [10, 9, 7, 6, 3, 1] on the console.
console.log(sortDesc);
// This will print the original array, without any sorting, because the method slice was used before both sorting methods above
console.log(numbers);
```

The code for this lesson can be found [here](Section_04/11-array-sort/).

### Immutable Arrays

The simplest way of working with immutable arrays is applying our operations (add, delete, update, etc) to a new array, using the knowledge acquired in the previous classes. Examples of how to do it, are listed below.

#### Adding elements to an Array

```javascript
const numbers = [0, 1, 2, 3, 4];
const newNumbers = [...numbers, 5];
// This will print on the console the array [0, 1, 2, 3, 4, 5]
console.log(newNumbers);
```

#### Deleting elements from an Array

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
const newNumbers = numbers.filter((el) => el !== 3);
// This wil print on the console the array [0, 1, 2, 4, 5]
console.log(newNumbers);
```

#### Updating elements from an Array

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
const newNumbers = numbers.map((el) => (el == 3 ? (el = 6) : el));
// This wil print on the console the array [0, 1, 2, 6, 4, 5]
console.log(newNumbers);
```

The code for this lesson can be found [here](Section_04/12-immutable-arrays/).

### Promises

In browsers, in order to get data from a external source/API, we usually mae use of the method `fetch()`, which requires as a parameter the URL of the source we wish to request data from.

This will return what we call a Promise, which need to be treated on the code. Promises can be into at least 3 basic 3 states:

- Pending - the promise is collecing data and waiting for the the next stage (uses `then()` with a callback function to either Reject or Resolve the promise)
- Rejected - the promise failed to colect the data or execute the next stage (uses `catch()` with a callback function to handle any errors)
- Fullfiled/Resolved - the promise was successfuly excecuted

The example below is a short recipe on how to work with Promises:

```javascript
const API_URL = 'anyurl';
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(console.log('Some error handler message or function...'));
```

The code for this lesson can be found [here](Section_04/13-promises/).

### Async/Await

A simple way to work with promises using the async/away way of hadling them is represented on the code below:

```javascript
const API_URL = 'anyurl';
async function getData() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}
const myData = await getData();
console.log(myData);
```

The code for this lesson can be found [here](Section_04/14-async-await/).

<hr>