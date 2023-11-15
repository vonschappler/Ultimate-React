# Personal notes taken

## Section_01:

Creating a new and online environment to make a simple React Application:

- Open the browser and type `react.new` in the address bar

React is structured into components. Each component is a function and the main component is usally named `App`.
Those components always return a jsx output. JSX is a scripting format that allows returning both html and js on it.

Alongside components, React works with states and effects, which are used to update the page dynamically.

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
<br>

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

> **NOTE:**
>
> **When destructuring an array, the name of the attribute inside the `{}` need to match the name used during the definition of the object to destructure.**

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

> **NOTE:**
>
> **The names given (`pGenre`, `sGenre`, etc.) will assing the values in the order the items are inside the array (`genre[0]`, `genre[1]`, and so on).**

The code for this lesson can be found [here](Section_04/01-destructuring/script.js).

<hr>

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

The code for this lesson can be found [here](Section_04/02-rest-spread/script.js).

<hr>

### Literals

Literals (<code>``</code>) are part of the features added to ES6. This allows to add JavaScript variables or operations inside a string.

To add any Javascript variable or oparation inside a literal, we use `${}` to create the JavaScript block which will contain the variable or literal inside the literal template started with the backtick.

```javascript
const affirmation = `${title} is a book!`;
```

The code for this lesson can be found [here](Section_04/03-literals/script.js).

<hr>

### Ternaries

Ternaries are operations with 3 operators: a condition, the result if the condition is satisfied and the result if it's not.

The syntax for this operation is displayed in the example below:

```javascript
pages > 1000 ? '' : ' ';
```

The code for this lesson can be found [here](Section_04/04-ternaries/script.js).

<hr>

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

The code for this lesson can be found [here](Section_04/05-arrow-functions/script.js).

<hr>

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

#### Nullish coalescing operator

The Nullish coalescing operator (`??`) short-circuits when the condition checked as the first argument is `true`, automatically returning the the fisrt argument as a result. This is mostly used to define default values. This works as a substitute of `||` for the falsy values `null` and `undefined`, returing everything else as value, no matter the value provided as fisrt argument.

```javascript
// prints '0' on the console, while returning 0 as a value
console.log(0 ?? 'It is a 0 value');

// prints 'null' on the console, while returning null as a value, ignoring the second argument
console.log(null ?? 'Is it null?');
```

The code for this lesson can be found [here](Section_04/06-logical-operators/script.js).

<hr>

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

The code for this lesson can be found [here](Section_04/07-optional-chaining/script.js).

<hr>

### Array map

The map method will loop through an array and as a result it will return a new array with the same length of the original array, with some operation applied to **EACH** element of the original array.

The map mathod always expect a callback function inside it, just like the exemple below.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByTwo = numbers.map((el) => el * 2);
// This will print the array [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] on the console.
console.log(multiplyByTwo);
```

The code for this lesson can be found [here](Section_04/08-array-map/script.js).

<hr>

### Array filter

The filter method will loop through an array and as a result it will return a new array with the elements that match the filter condition specified inside the callback function expected by the filter array method.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = numbers.filter((el) => el * 2 >= 10);
// This will print the array [5, 6, 7, 8, 9, 10] on the console.
console.log(filter);
```

The code for this lesson can be found [here](Section_04/09-array-filter/script.js).

<hr>

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

The code for this lesson can be found [here](Section_04/10-array-reduce/script.js).

<hr>

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

The code for this lesson can be found [here](Section_04/11-array-sort/script.js).

<hr>

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

The code for this lesson can be found [here](Section_04/12-immutable-arrays/script.js).

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

The code for this lesson can be found [here](Section_04/13-promises/script.js).

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

The code for this lesson can be found [here](Section_04/14-async-await/script.js).

<hr>
<br>

## Section_05:

### Rendering Root and Strict Mode

The basic code to create and render any React application in scrict mode is displayed below. Note that React Strict Mode is used as developer tool for hightliing bugs and issues inside the React application codebase, provinding warnings as feedbacks for errors, without affecting the result, because will not render any visible UI.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<hr>

### Debugging React code

Steps for debugging:

1. Make sure the application is running by using `npm start`
2. Stop the app (`Ctrl + C`) and restart it with `npm start`
3. Hard reload the brower
4. Keep both terminal and developer tools opened in the browser to check for errors
5. Try googling for the error messages you got, if any error messages are displayed either on the console, developer tools or as an overlay in the browser where the application should be renderdered
6. Always keep ESLint running - it will either warn you or show an error as a way to prevent those happen
7. Remember to check both the **Problems** and **Output** tabs on VSCode terminal for errors and warnings
8. Try comparing the code with the codes provided with the classes

<hr>

### React components

React applications are entriely made of components, which are building blocks of an User Interface (UI). In technical terms, React renders components all together into that UI.

Each component has its own **data/state**, **logic** and **appearance**, which defines how it works and should look like.

So, it's reasonably to say that we "build complex UIs by **creating** multiple components and **combining** them if they were lego pieces".

In React, components can be (and are) resued and/or nested inside each other, passing data between each other, using something called **props**.

Components trees always help on how to break down UIs into components, helping in understanding their relationship (parent and child components) and how they interact with each other.

### Creating and Reusing components

In React, components are functions. Thise functions are defined as components when they:

- Have their name started with a capital Letter
- Return some markup language (mostly in HTML format)
- Returns a single element defined by the markup language
- The component is declared in the top level of the code

Below there is an example of a simple component:

```javascript
function Title() {
  return <h1>This is my title!</h1>;
}
```

As mentioned components can be reused. The example below show how a component can be reused inside a React application:

```javascript
function Title() {
  return <h1>This is my title!</h1>;
}

function App() {
  return (
    <div>
      <Title />
      <Title />
      <Title />
    </div>
  );
}
```

<hr>

### What is JSX?

JSX is a **declerative** syntax to **describe** what components **look like** and **how they work**. Each component must return a block of JSX.

This syntax allow devs to combine embed **JavaScript**, **CSS**, and **other React components** into a single block of **HTML** code.

The HTML code inside the JSX syntax gets converted into a **React.createElement** function call by a tool caled **Babel** which is added whenever a new project is created with the command `npm create-react-app <project_name>`.

#### Diferences between declarative and imperative programming

- Imperative (describes step-by-step what we want to see and how to do it):
  - Requires manually DOM element selection, manipulation and transversing
  - Each mutation to the DOM needs to be done step-by-step in the code
- Declarative (describes what we want to see, without saying how to do it)
  - Descibes how the DOM should look like using JSX, **based on the current data** (props and states) without any DOM manual manipulation
  - React is then an **abstraction** away from the DOM, since developers don't need to "touch" the DOM
  - The UI is then a "**reflection of the current data**" passed to it via the props and states

<hr>

### JavaScript logic in components

Because Components are written as JavaScript functions, it's possible to add any logic inside them. The code below shows a simple example of this.

```javascript
function Title() {
  const hour = new Date().getHours();
  const isMorning =
    hour <= 11 ? `It's ${hour}h in the morning now!` : `It's not morning.`;
  return <h1>{isMorning}</h1>;
}
```

<hr>

### Separation of Concerns

At the rise of Interactive SPAs (single page application):

- Traditional separation of concerns - one technology per file
- The JavaScript is even more in charge of HTML
- Logic and UI are tightly coupled

So... "why keep files separated?" this then the why React and JSX get into place. JSX comes into action to colocate logic and UI that change together into a "single place". This colocation of logic and UI is the fundamental reason that defines the existence of components.

React then:

- Instead of having one tecnology per file, we have one component per file, which defines the **new separation of concerns**
- These "concerns" have all tecnology necessary together
- Keeps still logic and UI coupled, but in a different way

### Styling components on React

React "does not care" on how any component is styled. This means that styles can be applied to component in many ways:

- Inline styling
  Inline styling using the JSX syntax is a bit different than the usual inline styling we are used on normal HTML files, with any CSS properties added as JavaScript code inside an object.

This object must containt a set of `"key": "values"` inside it, where the key makes reference to the CCS property (always entered into camel-case) and the value always as a string. The code below shows a quick example of how to it:

```javascript
function Title() {
  const styles = {
    color: 'red',
    fontSize: '48px',
    textTransform: 'uppercase',
    textAlign: 'center',
  };
  return <h1 style={styles}>My title</h1>;
}
```

- External CSS files
  To add external CSS to a react component, we need first to import that file into the application / component file.

After that, inside the component defined, we add a property/attribute called `className` and set it's value to the class inside the imported CSS file. The code below shows how this structure should be created:

```javascript
// react imports here...
import 'path/to/css/file';

function Title() {
  return <h1 className='class-inside-css'>My Title</h1>;
}

function App() {
  <Title />;
}
```

- Tailwind css
- Sass css

<hr>

### Passing and Receiving props

Props can be defined as communication between parent and child components. This is the way of passing data betwen those components being part of one of the fundamentals of React.

This is the way React uses to customize the components based on the data/state provided of each component.

This is done into two steps:

1. Each prop is defined as an attribute of the component in the parent element
2. In the component we receive those attributes as the function parameter and make use of the inside JavaScript blocks

The code below shows how to use props in React:

```javascript
function Title(props) {
  return <h1>{props.text}</h1>;
}

function App() {
  <Title text='Hello world!' />;
}
```

<hr>

### Props, Immutability and One-Way data flow

Props are used to pass data from **parent components** to **child components**. They are an essential tool use for customization and configuration of components. Anything accecpted by JavaScript code can be passed as a prop: values, arrays, strings, objects, functions and **even** other components.

Thanks to those props, the parent component controls how the child components will look and work.

Keep in mind that even though props control can the look and feel of a component, they are not the **"only kind"** of data a component can use. Think as if the data passed to a component is divided into small pieces of data, being two of them the **Props** and **State**.

The **State** is the part of data which can be updated by the internal logic of a component itself, while the **Props** is the part of data coming from the parent component, being updated only by the parent component, because it comes from outside the component.

So, as a React (**strict**) rule, we take that Pros are **immutable**, being read-only. If we whish to make use of mutable props, they must be defined as a **State**.

Props are immutable to prevent mutation on the parent component, causing possible side effects on the application. Remember that in JavaScript, when you create a copy of an object and mutate it, the original version of it is also mutated.

Components in React have to be "pure functions" in termos of props and state, to prevent those side effects. Keeping components that way, React will optmize the application, preventing bugs and making it predictable.

One-Way data flow is one of the principles of React, meaning that data only flows from parent components to child components, not the other way.

The reasons for this:

- Make applications predictable and easier to understand
- Meke application easier to debug, as we know exactly where the data is coming from
- Makes the application perform a lot better than in a two-way data flow, used by frameworks such as Angular, for example

<hr>

### Rules of JSX

- General rules:
  - JSX works similar to HTML, with a possibility of adding JavaScript to it, using `{}` (mostly on text and attributes)
  - Inside `{}`, it's possible do enter any expression such as variable referencing, object/array creation, ternary operations
  - Statements like `if/else`, `for`, `switch` are not allowed
  - JSX always produces a JavaScript Expression - this make insertion of other JSX code inside `{}` as well as it makes it possoble to add any JSX code inside a component
  - Each piece of JSX can have only a **one root element** - to make use of more root elements, make use of `<React.Fragment>` or `<>`

<hr>
  
### Rendering lists

Rendering a list is on it's simplest definition the rendering of components based on data provided in the form of an array, allowing to insert them dynamically on the application.

This process can be achieved by using the map method, as displayed below. It's important to noticed though, that whenever rendering components using this method, a key parameter to uniquely identify the component (mostly used for React optmizations is required to be passed as a prop)

```javascript
const names = ['Maria', 'Joseph', 'Anthony'];

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}

function Greetings() {
  return names.map((el) => {
    return <Greeting name={el} key={el} />;
  });
}
```

<hr>

### Conditional Rendering

Coditional rendering is all about telling React how and if a component or JSX will be rendered based on a state/prop. This can be achived in three diferent ways:

- Using the `&&` operator (renders nothing due to short-circuiting)

```javascript
function TimeOfDay() {
  const hour = new Date().getHours();
  const dayTime = 6;
  const nightTime = 18;
  const isMorning = hour >= dayTime && hour <= nightTime;
  return <div>{isMorning && <p>The sun is up!</p>}</div>;
}
```

- Using ternaries (allows providing an alternative rendering)

```javascript
function TimeOfDay() {
  const hour = new Date().getHours();
  const dayTime = 6;
  const nightTime = 18;
  const isMorning = hour >= dayTime && hour <= nightTime;
  return (
    <div>{isMorning ? <p>The sun is up!</p> : <p>It's nighttime!</p>} </div>
  );
}
```

- Multiple returns - (adding if clause outside the JSX returned by the component, mostly used to render or not an entire component)

```javascript
function MyMessage(props) {
  const toRender = props.msg;
  if (toRender === 'day') return <p>It's daytime!</p>;
  if (toRender === 'night') return <p>It's nightime!</p>;
}

function TimeOfDay() {
  const hour = new Date().getHours();
  const dayTime = 6;
  const nightTime = 18;
  const isMorning = hour >= dayTime && hour <= nightTime;
  if (!isMorning) {
    return <MyMessage msg='night' />;
  }
  return (
    <div>
      <MyMessage msg='day' />
    </div>
  );
}
```

> **Recomendations:**
>
> 1. Use the ternary operator when trying to render "pieces" of JSX based on conditions
> 1. Use the multiple returns when trying to render or not an entire component based on conditions or even rendering a totally different component - this technique is also known as "early return"

<hr>

### Extracting JSX into new components

Extracting JSX into new components helps to keep the code cleaner and it's really useful when a certain component starts getting too big.

If the extracted component depends on states / pieces of data, the functional created need to receive its attributes (props), as already discussed in this session.

<hr>

### Destructuring Props

To destructure a prop, all that is required is to pass over the prop name passed to a component as a destructured object to the function that defines the component. The code below is a small example of how to do that.

```javascript
// By doing this, it's easy to know that this component expects a prop defined as msg in order to be rendered correctly
function MyMessage({ msg }) {
  if (msg === 'day') return <p>It's daytime!</p>;
  if (msg === 'night') return <p>It's nightime!</p>;
}

function TimeOfDay() {
  const hour = new Date().getHours();
  const dayTime = 6;
  const nightTime = 18;
  const isMorning = hour >= dayTime && hour <= nightTime;
  if (!isMorning) {
    return <MyMessage msg='night' />;
  }
  return (
    <div>
      <MyMessage msg='day' />
    </div>
  );
}
```

<hr>

### React Fragments

React framents are used when we wish to render two or more components separatedly, by grouping them into a "virtual div".

This is achived easly by adding `<></>` or `<React.Fragment></React.Fragment>` as a wrapper around the components to be rendered. The code below exemplifies the use of this:

```javascript
function TimeOfDay() {
  const hour = new Date().getHours();
  const dayTime = 6;
  const nightTime = 18;
  const isMorning = hour >= dayTime && hour <= nightTime;
  if (!isMorning) {
    return (
      <React.Fragment key='any-key'>
        <MyMessage msg='night' />
        <p>Time to sleep! Go get some rest!</p>
      </React.Fragment>
    );
  }
  return (
    <>
      <MyMessage msg='day' />
      <p>Wakey, wakey!!!!!</p>
    </>
  );
}
```

As a general convention, `<React.Fragment>` is mostly used when rendering **lists of fragments**, because lists, as already discussed, need unique keys for each list item so React when better optmize the code. With fragments lists, the only way to pass the unique key is by creating the fragments with the `<React.Fragment key='key-unique-value'>` instead of using simply `<>` as wrapper.

<hr>

### Setting Classes and Text Conditionally

The best way to set Classes and text condittionaly is by making use of the ternary operator.

The example below is a demonstration of how to do it:

```javascript
function Car({ carObj }) {
  return (
    <li className={`car-item ${carObj.soldOut && 'sold-out'}`}>
      <img src={carObj.photoName} alt={carObj.name} />
      <div>
        <h3>{carObj.model}</h3>
        <p>{carObj.year}</p>
        <span>{!carObj.soldOut ? `${carObj.price}` : `SOLD`}</span>
      </div>
    </li>
  );
}
```

<hr>

The final code for this entire section can be found [here](Section_05/01-pizza-menu/).

<hr>
<br>

## Section_06:

### Handling events the "**React way**"

In React, as expected, events are handled in a declarative approach. This means that instead of using the imperative `addEventListener` (for example), we use something similar to **HTML inline event listeners**, always written in camel-case, like for example `onClick`, `onChange`, `onMouseOver`, etc.

A quick example of the JSX syntax for adding a simple alert function to a button whne it's clicked is displayed below:

```javascript
function AlertButton() {
  return <button onClick={() => alert('You clicked me!')}>Click me</button>;
}
```

The function inside the "inline" event listener attribute (it's more accurate to call it as an event listener prop) which handle events are always callback functions, or else, React will execute them as soon as the component is rendered on screen intead of running the function when the expected event occurs.

The best pratice to add event listeners on React is not to pass the functions directly into the JSX syntax (like it was done in the code above), but creating them as separated functions (usally inside the component itself) than passing the function name as the value of the event attribute, just like here:

```javascript
function AlertButton() {
  // The "handle" part of the function name is part of some React conventions/standards to help developers to understand better the code.
  //The function below could also be written as a declarative function instead of a expression function like did here
  const handleAlert = () => alert('You clicked me!');
  return <button onClick={handleAlert}>Click me</button>;
}
```

<hr>

### States in React

State is the most important concept in React. States are data that a component can hold over time. They are the (in a analogical way), the "component's memory" because they hold information the component needs to "remember" during the application lifecicle.

Each variable that defines the State of a component can be called as "Piece of state" or simply "state varible" and updating any of those "pieces of state" inside the full state of a component, causes React to re-render the whole component (also know as a component View).

> **Note:**
>
> **All component Views together compose the user interface**

States are then a tool which allow developers to:

- Update the component view by re-rendering it when any piece of state changes
- Persists local variables between renders

To use states in React, three steps:

1. Create one or more pieces of state
1. Use those pieces of state inside the component
1. Update the pieces of state using event handler functions

The code below exemplifies shortly

```javascript
// other react imports
import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>You clicked me {count} times.</button>;
}
```

> **NOTES:**
>
> 1. **The function useState is a React hook. React functions which start with `use` are hooks. Hooks can only be called in the top level part of a component.**
> 1. **State should be updated always by using the setter function defined in the destructuring of the array returned by the function `useState`, also known as setter function. Remember that React is all about immutability and updating a state manually mutates the state, which is _not a good practice_ when working with React.**
>
> ```javascript
> // This helps to understand what each argment when creating a piece of state
> const [stateName, setStateName] = useState(startNameValue);
> ```

<hr>

### Updating States based on current State

The best practice to update states based on the current state is by using a callback function inside the setter function, just like as the show in the code below:

```javascript
function CounterButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currCount) => currCount + 1);
  };
  return <button onClick={handleClick}>You clicked me {count} times.</button>;
}
```

> **NOTES**
>
> **When not updating states based on the current value of itself, it's ok to use the direct value inside the setter function as shown previously [here](#states-in-react).**

<hr>

### A bit more about states and some guidelines:

1. Each component has and manage its own state, no matter how many times it's rendered in the UI
1. The UI a basicaly a a function of state. A React application is fundamentaly about change and update these states, which are reflected in the changes on the UI
1. It then, safe to say, that the UI is a reflection of data (props and states) changes over time
1. A new "piece" of state needs to be created whenever a component should keep track of any data over time. Remember that this piece of state will change, helping to create a dynamic component, which will be updated when the piece of state is updated.
1. State updates usuly haappen inside event handlers
1. Avoid using states for data which won't trigger/affect the component look and feel. This can cause lack of peformance, since it's make React to re-render that component without it been necessary

<hr>

### Forms in React

In React, to work with forms, we add inside the JSX the `<form>` HTM element adding the form inputs afterwards just like if we were writing the form inside an HTML file.

The code below is a simple example on how to create a form component using React and JSX:

```javascript
function MyForm() {
  return (
    <form>
      <input placeholder='Any placehoder text' />
      <input type='checkbox' />
      Just a checkbox
      <button>Submit</button>
    </form>
  );
}
```

In order to make React to "react" to a form, it's necessary to add event handlers functions to that form, inside the JSX component that holds the form code.

An implementation of these handlers is displayed below:

```javascript
function MyForm() {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Any placehoder text'
        onChange={handleTextChange}
        value={text}
        name='input'
      />
      <button>Submit</button>
    </form>
  );
}
```

This technici follow the React concept/technique of controlled elements, which means that we need to add states to each form element in order to centralize the states in the component while removing them from the DOM (usual HTML of managing form states without React).

<hr>

### State vs Props

- States:
  1. Internal data, owned by the component
  1. "Component memory"
  1. Can be used by the component itself
  1. Causes a component re-render if updated
  1. Used to make components interactive
- Props:
  1. External data, owned by a parent component
  1. Passed to the component as function parameters
  1. They are read-only
  1. A component is also re-rendered upon receiving new or updated props
  1. Use by parent to configure child component settings

<hr>
<br>

## Section_07:

### "Thinking in React"

The React mindset required for any React developer can be defined in two parts:

- Thinking about components, states, data-flow, effects
- Thinking about state transitions instead of element mutations

This process of thinking hae the following steps:

1. Break the desired UI into components and stabilish the component tree
1. Build a static version of the UI in React, without states
1. Manage the states for the application:
   1. Think about states:
      1. When to use states
      1. Which type of state (local vs global)
      1. Where each piece of state needs to be placed
   1. Establish the data flow:
      1. One-way data flow
      1. Child-to-parent communication
      1. Accessing global states

Keep in mind the process above is not something rigid, because it has a lot of back and forths but it can be used as a initial guide line for starters. By following those gidelines, the developer will be able to:

- Break a UI into components
- Make components reusable
- Assemble a UI using those resuable components
- Define which pieces of state, type and which components "own" them
- Define the correct data flow for the application

<hr>

### Fundamentals of State Management

State management is deciding when to create pieces of state, defining their type and where those states will be placed in the application, following the specific data flow direction set by the developer.

States can either be local or global. The main difference between them is described below:

- Local State:
  - State used/needed only by one or few components
  - Is defined inside a component and only that component and it's child components (if necessary) have access to it via props.
- Global State:
  - Many compoponents can use/need
  - Is accessible to every component in the application
  - Defined either using the React Context API or Redux

<hr>

### State lifting:

State lifting is defined simply as the process of moving a local state from a component to its parent. This is necessary when a state crated by one component needs to be accessed by its siblings.

The code below displays a small example of how to do that:

```javascript
function Child1({ onSetMessage }) {
  handleSetMessage('John');
}

function Child2({ msg }) {
  return <p>{msg}</p>;
}

function Parent() {
  const [msg, setMsg] = useState('');
  function handleSetMsg(name) {
    setMsg(`Hello ${name}`);
  }
  return (
    <>
      <Child1 onSetMessage={handleSetMsg} />
      <Child2 msg={msg} />
    </>
  );
}
```

<hr>

### Derived State:

A derived state is a state computed based from an existing state or from props.

When deriving a state, using regular variables ensure that a component is not re-rendered without being necessary, as well as it ensures the data is still in sync with the state which we are deriving from, because the single re-render of the component where the state lives in will automatically re-calculate the derived state.

The code below shows a quick example of how a derived state can be used:

```javascript
/* some code */
const people = [
  { name: 'John', paycheck: 458 },
  { name: 'Anna', paycheck: 722 },
];
const [person, setPerson] = useState(people);
const employees = person.length;
const totalPay = person.reduce((acc, currPay) => acc + currPay.paycheck, 0);
const avrgPay = totalPay / employees;
console.log(avrgPay);
/* some more code*/
```

<hr>

### Sorting Arrays

To keep data immutable, the best practice to sort items is to create a new array of data based on the original one associated to the power of defived states.

The code below shows an example this can be done using the array methods `slice` (to create a copy of the array) and `sort` (in order to sort the new array):

```javascript
/* some code */
const people = [
  { name: 'Paul', paycheck: 1200 },
  { name: 'John', paycheck: 458 },
  { name: 'Anna', paycheck: 722 },
];
let sortedPeopleName = people
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedPeopleName);

let sortedPeoplePay = people.slice().sort((a, b) => a.paycheck - b.paycheck);
console.log(sortedPeoplePay);
```

<hr>

### Splitting up the components into files

To split a full application into a file per component, all that is necessary is to proceed as the following steps:

1. Create a new \*.js file with the name of the component
1. Remove the code of the component to be moved from the main Application
1. Add the code removed to the new file created
1. Import the necessary references in both files

<hr>

### "Children props"

Components in React can also be declared by using `opening` and `closing tags`, as displayed below:

```javascript
<Component></Component>
```

Children props are automatically received by any component in React. This is defined by the content/jsx code placed between the `opening` and `closing` tag of a component, by making using of the special word `children`, as displayed below.

```javascript
function App() {
  return <Component>Some content between tags</Component>;
}

function Component({ children }) {
  return <div>{children}</div>;
}
```

To sumarize:

- Children props allow us to pass any JSX markup into an element
- This tool is used to make REAL en CONFIGURABLE components, allowing ease edit of their content without the need of aditional props
- This allow us to create generic components where no content was defined previously their use, as for example, components such as modals, buttons, etc.

<hr>
<br>

## Section_09:

A quick introduction and overview for the next section.

<hr>
<br>

## Section_10:

### How to Split an UI into Components?

- Components side matters:
  1. Making "huge" components is bad because:
     1. Those have too many responsabilities
     1. Might night too many props
     1. Make them hard to reuse
     1. They usually have complex code, making them hard to understand
  1. Making "small" components is bad because:
     1. An application will and up with hundreds of mini-components
     1. Creates a confusing codebase
     1. Makes the application too **"abstracted** (hiding implementation details of a specific component)

To "solve" this problem, the ideal is to balance both sides of the component size spectrum extremes (huge and small). In order to reach this balance, it's advised to follow these four criteria:

1. Each component must have a logical separation of content and/or layout:
   - Does the component contain pieces of content or layout that **don't belong together**?
1. The components created must be reusable
   - Is it possible to reuse part of the component?
   - Do you **want** or **need** to reuse the component?
1. The components created should handle a single responsability and have little complexity
   - Is the component doing too **many different things**?
   - Does the component rely on too **many different props**?
   - Does the component have too **many pieces of state** and/or **effectss**?
   - Is the code, including JSX, too **complex and/or confusing**?
1. The components should match the personal coding style
   - Do you prever **smaller or bigger** functions / components?
     > **NOTE:**
     >
     > This criteria is subjective, but remember that each individual has a different way of coding and some people are more productive with large components while other prever smaller ones.

Some guidelines to help in answering the questions above:

- Be aware that creating a new component creates a new level of abstraction. Abtractions have a cost, because the more abstractions, the more mental energy is required to swtich back and forth between those components
- Name a component according to what it does or what it displays. Don't be afraid of using long component names
- Never declare a new component inside another - try to co-locate related components inside the same file before separating them into different files too early
- It's normal that an application has components of different sizes
  - Some very small components are necessary due their high reusability and low complexity
  - Most apps will have a few huge components which are meant not to be reused

<hr>

### Component Categories:

There are three main categories of components:

1. Stateless / presentational:
   - No state
   - Resuable
   - They receive some props and present data or other component
   - Usually small components
1. Stateful components:
   - Have state
   - Can still be reused
1. Structural componentes:
   - Pages
   - Layouts
   - Screens
   - Result of composition
   - Can be huge and no reusable

### Prop Drilling:

Prop Drilling was already discussed in this course, but as recap, this happens when "sibling" components share one or more states, requiring us to "lift" these states into the common parent, passing them as props to the components which make use of the state.

<hr>

### Component Composing

Component composution is the technique used to create more reausable components, by passing inside and to the parent component the **children** prop, as already discussed in this course, using the opening and closing tags for the parent component, leaving a "blank" area which will be filled with the children passed.

```javascript
function Modal({ children }) {
  return <div className='modal'>{children}</div>;
}

function Success() {
  return <p>Sucess!</p>;
}

function Error() {
  return <p>Error!</p>;
}

function App() {
  return (
    <>
      <Modal>
        <Success />
      </Modal>
      <Modal>
        <Error />
      </Modal>
    </>
  );
}
```

This technique is quite useful when creating reusable and flexible components as well it helps on fixing the **prop drilling** issue, making this the best way of composing layouts.

Another way to compose components is passing the prevously called **children** as a prop of the parent component, as displayed below:

```javascript
function Modal({ element }) {
  return <div className='modal'>{element}</div>;
}

function Success() {
  return <p>Sucess!</p>;
}

function Error() {
  return <p>Error!</p>;
}

function App() {
  return (
    <>
      <Modal element={<Success />} />
      <Modal element={<Error />} />
    </>
  );
}
```

<hr>

### Props as Component API:

Separing the concerns about component creator and component consumer, it's possíbel to assume component props as a "public api" of that component.

For this, we need to consider the number of props we wish to expose for the consumer. With this under consideration we can get into two extreme scenarios where:

- A component has too few props:
  - The component is not flexible enough
  - The component might not be useful
- A component has too many props:
  - Too hard to use
  - Expose too much complextity of the component
  - Hard-to-write code
  - Makes it necessary to provide good default values

This means the best practice is to find the best equilibrium of how much props we developers want to expose.

<hr>

### PropTypes

PropTypes allow us to define which type of value can be passed as a prop to a reusable component. Although React allows us to do that, it's advised to make use of typescript to ensure the PropTypes are correctly specified. Also keep in mind that actually React developers do not use PropTypes frequently, prefering make the use of type script, because creating components with PropTypes is too time consuming.

The code below shows how to make use of this:

```javascript
import PropTypes from 'prop-types';

HelloComponent.propTypes = {
  name: PropTypes.string,
};

function HelloComponent({ name }) {
  return <h1>Hello, {name}! How are you today?</h1>;
}

function App() {
  return (
    <>
      <HelloComponent name={'Mary'} />
    </>
  );
}
```

<hr>
<br>

## Section_11:

### Components, Instances and Elements:

Components can be defined as the description of a piece of UI, with the main function of returning a React element (or element tree), usually written in JSX.

A component can be seen as the "blueprint" (template) used to create what we call component instances.

Instances are created when components are used in React. React insternally calls the functions which define each component every time it's used in the code, excecuting them on every call.

Each instace holds its ony states, props and lifecylce inside the application - they are also responsible for retrnun react elements.

React elements are basically the conversion of the JSX written when the function **React.createElement()** is called in the code. They hold all the information necessary to create **DOM** elements, redering those DOM elements on screen.

DOM elements are the visual representation of a component instance in the browser.

<hr>

### How Rendering works

In React, rendering is NOT updating the DOM or displaying elements on the screen. Rendering only happens internally, not producing visual changes in the UI.

The "common sense of rendering" components in fact is splited into two phases:

- **Render phase**: where React calls components funcions and figures out how the DOM should be updated
- **Commit phase**: where React writes the changes to DOM, by updating, inserting and / or deleting elements.

The render phase is triggered **TO THE ENTITE APPLICATION** by one of the two situations:

1. Initial render - happens when the application is launched
2. Status update in one or more component instances (also called re-render)

Keep in mind that those renders are not triggered immediatelly, but they are scheduled for when the JS engine is "free" to run a batch of multiple `setState` calls in event handlers.

<hr>

### Render phase in details

React's rendering is based on the idea of Virtual DOM, where all React elements are placed.

Whenever a new render is triggered by nee of more component instance, the render phase starts. Updated React elements are created by the functions call of those components which triggered a render, generating a new Virtual DOM.

This virtal DOM we have spoken of is in fact the whole React Element Tree, created with the instances of all component that are part of the component tree.

Keep in mind that when a component is re-render, all child elements of this component will be re-rendered as well, no matter if their props changed or not.

> **NOTE:**
> This is necessary because React doesn't know if a children component of the re-rendered component will be affected by the re-render.

The new virtual DOM will be then reconciliated and compared (using a process called diffing) to the current fiber tree by replacing the updated components instances and generating an updated Fiber tree with a list of DOM updates (called list of effects) to be done in the DOM, on the commit phase.

> **NOTES:**
>
> 1.  Fiber trees are mutable objects containing a unit of work for each component instance. This unit of work is called "fiber" and it stores the current state, props, used hooks and also its reponsibla for mananing any side effect and the queue of work each component instance has.
> 2.  The Fiber reconciler allows React to work asynchronously by spliting the rendering process in chunks, changing priority of certain tasks and controling if any component work should be paused, reused or thrown away - preventing long renders from blocking the whole JS engine.

<hr>

### Commit phase in details:

The commit phase is a synchronous process, updating the DOM all at once, so no partial results are displayed in the UI. This phase happens right after the render phase, where, now, React takes the list of DOM updates and "flush" it to the DOM, making the updated fiber tree the "new" current fiber tree for the next render cycle.

The browswer notices the changes in the DOM and then "paint" those changes on the screen, for the user/viewer.

The commit phase is excecuted by a separated set of libraries called **renderers** (note that this name does not match the actual state of React, but it's called like that because it fits the common sense of "rendering").

Examples of renderers:

- ReactDom (web browsers)
- ReactNative (mobiles)
- Remotion (videos)
- And many other third parties that can render things like word Microsoft Word docx files, pdf files , Figma templates, etc.

<hr>

### How Diffing works:

Diffing uses 2 fundamental rules:

1. Two elements of different types will produce twi different fiber trees
1. Elements with a stable key prop stay the same across all renders

By taking those two rules, React process 1000 operations per 1000 elements instead of 1000000000 operations per 1000 elements.

These two rules take two things under consideration:

- Same Position x different dom element or different react component instance:

Assume this simple snippet of code:

```html
<!-- before update-->
<App>
  <div>
    <button>Click me</button>
  </div>
  <main>
    <h1>Some text</h1>
  </main>
</App>

<!-- after update -->
<App>
  <nav>
    <button>Click me</button>
  </nav>
  <main>
    <h1>Some text</h1>
  </main>
</App>
```

When this kind of change happens in React, React assumes the whole subtree is no longer valid, so the old elements and everything inside it are destroyed. So, in this example, it causes the removal of everything inside `<div>` from the DOM - this removal process includes also any previous state of the children elements, replacing them with new instances of the components called by their functions, reseting any existent state.

- Same position x same dom element or same component instance:

For this case, assume the following inppet:

```html
<!-- before update-->
<App>
  <div className='links'>
    <button>Click me</button>
  </div>
  <main>
    <h1 name={'Anna'}>Some text for {name}</h1>
  </main>
</App>

<!-- after update -->
<App>
  <div className='nav'>
    <button>Click me</button>
  </div>
  <main>
    <h1 name={'Maria'}>Some text for {name}</h1>
  </main>
</App>
```

In this situation, the elements (and it's chidlren) will be kept, including existent states. So what React will do in this case is to pass only the new props and/or attributes to the render when those are changed, keeping everything else.

Those two process, because they mutate the fiber tree instead of re-creating it from scratch, allows React to be as efficient as possible.

<hr>

### The key prop

The key prop is a special prop we use to tell the diffing algorithim that an element is unique, allowing React to make distinctions between multiple instances of the same component type.

When the key prop stays the same across renders (called **stable key**), the element will be kept in the DOM, even if this position in the tree changes - this is one of the main reasons of why we use keys in lists of elements.

Now, if the key prop is changed across renders (called **changing key**), the element will be completly destroyed - alongside its states - and a new one will be created (even if the element does not change its position in the tree).

> **TIPS:**
>
> 1. Always use stable key props when using multple elements of the same type, to prevent unwanted rerendering of elements
> 1. Remember that when you need to reset states by changing keys of elements when / if necessary.

<hr>

### How render works:

React components have two types of logics:

1. Render logic

   - All the code located of the top level of the component function
   - Participates in describing how the component view looks like
   - It executed whenever the component renders

2. Event Handler Functions

- It is executed as consequence of the event that the handlers is listening for
- All code that "does things": update states, peform requests, read fields, navigate to another page

In order to understando those two types, let remember some of the **React functional programming principles**:

1. **Side effect**: dependency on or modification of any data outside the function scope, interacting with "the outside world"
2. **Pure functions**: a function that has no "side effect", always returning the same output if it's given to it the same input, making it totally predictable

With this in mind, it's time to review the rules for render logic:

- Components must be pure when it comes to render logic: given the same props, a component instance should always return the same JSX
- Render logic must not produce any side effects: it does not interact with the outside world, meaning that in render logic:
  - There is no peforming of network requests (API calls)
  - There are no timers
  - There is no direct use of the DOM API
  - There is no mutation of objects or variables outside the function scope
  - There is no update for states or refs - that can cause infinite loops

<hr>

### Batching state upates:

In order to understand how React "batch" state updates, let's chack the snipet of code below:

```javascript
// some code

const resetStates = () => {
  setName('');
  setSurname('');
  setIncome(0);
};

// some more code
```

Using that snippet as some reference, it would be commom to assume that React would trigger a re-render for each setter function when the `resetStates` function is called on any event handler. But in fact what happens is that React merges the three setter functions into a single state (batched state) and just after completing the execution of the batch of updates it will then trigger the **Render** and **Commit** phases. This batching process happens automatically in **React 17** and **React 18+**, when it comes from any event handling!

Keep in mind that updating states is an asynchronous action. This happens because updates to states just happen after the re-render. So in cases where it's necessary to make use of the current "updated" state immediately, inside the setter function we should define a callback, as follows:

```javascript
// some code

const resetStates = () => {
  setName('');
  setSurname('');
  setIncome((income) => (income = 0));
};

// some more code
```

**React 18+** also batches updating states for **timeouts**, **promises** and **DOM native events** - this is a new feature added. Just consider that this can be a bit problematic and a way to "fix" this issue (considering this is really an issue) is by wrapping the desired state updates into a `ReactDom.flushSync()` function.

<hr>

### How events works:

Events are not triggered on the target itself - they are genereated on the top of a DOM tree and travel all the way from top to bottom of the tree until it reached the target element, on what is called **capturing phase** and move all the way back to the top of the tree on what we call **bubbling phase**.

Event propagations in a DOM tree, by default, are listened by the handlers on the target and during the bubling phase. It's possible to prevent the bubbling phase making use of `e.stopPropagation()` in the code, although this is rarelly necessary to be done.

This whole process allows devs to make use of a technique called **event elegation** - this technique consists into hadling events for multiple elements in on single common parent to all of them.

This improves the application performance, since it means that instead of multiple handlers - one for each child element, we just need the handler on the common parent element, while checking which child triggered the event with `e.target`.

Basically, this is how React manages events. React register all event handlers of the same type in a "bundled" big handler inside the rootDom container instead of adding it to each React Element itself, as most people could imagine when they read the code below:

```js
<button className='btn' onClick={() => setLoading(true)} />
```

Keep in mind that when we create and event handler on React though, instead of the native DOM event object that vanilla javascript provides us, we have access to something called **SyntheticEvent**.

Those SyntheticEvents are wrappers around the DOM's native event object, with the same interface as the DOM events, but with some fixed to prevent browser inconsistences, making them run exact the same way in all browsers.

In React, the most important SyntheticEvents always bubble. The exeption for this rule scoll event.

In React:

- Attributes for event handlers are named using camelCase, eg. onChange instead of onchange
- The only way to prevent the default behavior of an event is by using `preventDefault()`
- If an event needs to be captured during the capture phase, just add "Capture" to the handler, eg. onClickCapture
<hr>

### Frameworks vs Libraries:

#### Frameworks ("all-in-one kit")

- A framework includes everything necessary to build a complete application
- You are stuck the framework tools and conventions

#### Library

- Offers the freedom to pick only the required external (3rd-party) libraries required on the application we desire to build
- You need to **research**, **download**, **learn** and **stay up-to-date** with multiple external libraries

#### React Ecosystem:

1.  Routing: **React Router**, React Location
1.  HTTP requests: **Js fetch()**, Axios
1.  Remote state management: **React Query**, SWR, Apollo
1.  Global state managment: **Context API**, **Redux**, Zustant
1.  Styling: **Css Modules**, **Tailwindcss**
1.  Form management: **React Hook Form**, Formik
1.  Animations/transitions: Motion, React-spring
1.  UI components: Material UI, Chakra, Mantine

<hr>
<br>

## Section_12:

### Component (instance) lifecycle:

The lifecycle of a compoment can be simply described in the following stages:

**1. Mount / Initial render:**

- The component instance is rendered for the **first time**, with fresh state and props

**2. Re-Render:**

- This re-render stage is an options stage and happens when:

  1. The component **state** changes
  1. The component **props** changes
  1. The component **parent** re-renders
  1. The componetn **context** changes (more about context later)

**3. Unmount:**

- The component "dies", being destroyed and removed from the screen, alongisde with its states and props.

It's important to understand that it's possible to hook into these different stages, allowing to run code at these specific stages, by making use of the **useEffect** hook.

<hr>

### useEffect hook:

As already discussed, we can't create any kind of side effects inside the code component (which would happen for example if we force a look of renders inside it - which can simply be shown in with the code snippet below).

```javascript
// some code...

export default function InfiniteLoop() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  // Any of the lines below you force an infinite loop and can cause the application to crash.
  //There are many other ways of examplifying infinite loops, but this is the simplest of them
  setMovies([]);
  setState([]);

  // some more code...
}
```

As a way to **safelly** create side effects like the one displayed above, is by using the **userEffect** hook. Doing this is possible because the "side effects" created by the **useEffect** will be registered end executed only after specifc render stages, for example write some data inside the component after the initial render.

The snippet below, is a simple example of how the **useEffect** hook can be added to a small application in order to fecth some data.

> **IMPORTANT:**
>
> Each effect should be responsible for only ONE THING, meaning that useEffect has to be responsible for a single side effect.

```javascript
export default function MoviesApp() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  // By passing an empty arry as dependecy_array, means the useEffect will run only during the mount stage of the component lifecycle.
  // This means the code inside useEffect() will be executed ONLY after the component is rendered, meaning it will run just one time, for this small piece of code.

  useEffect(function () {
    fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);
  // some more code...
}
```

<hr>

### A deeper look on Effects:

Before we can have a look on what Effects really, are, it's important to remember where React creates side effects and what side effects are:

> "Side effect is basically any kind of "interaction between a component and the world outside it". Think in this as any kind of code that actually "does something", eg. data fetching, setting timers, accessing the DOM manually, etc."
>
> Because of this (sometimes) required side effects, we do need them all the time in React because they are what really makes our application do something useful, be we also know that they can't not be inside the render logic.

- Where to create side effects?

  - Event handlers:

    Functions triggered when an event they are listening to happens (this most times is not enough to "give life" to an application)

  - Effects (making use of userEffect):

    Functions triggered by rendering a component. Effects allows us to write code to run ad different moments of the component lifecycle (mount, re-render or unmount)

#### Quick comparison between event handlers and effects:

1. Event handlers:
   1. Exececuted when the corresponding event happens
   1. This is used to "**react**" to an event
   1. Preferred way of creating side effects

Example:

```javascript
// some code...
function handleClick() {
  fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=matrix`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
}
// some more code...
```

1. Effects (useEffect):
   1. Executed after the component is mounted (initial render) and after subsequent re-renders defined by the dependency array of **useEffect**
   1. This is used to keep the component in synchonization with some external system, such as an API we are using to fetch some data, for example

Example:

```javascript
// some code...
useEffect(function () {
  fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=matrix`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
  return () => console.log('Cleanup');
}, []);
// some more code...
```

<hr>

### The useEffect dependency array:

By default, and effect will run after every render. This can be prevented by passing a dependecy array to the **useEffect** function.

This array tells React when to run the effect, by tracking changes on the dependecies listed on the dependency array, executing the effect again.

Every state variable and prop used inside the effect must be included in the dependency array, or a **stale closure** error can be created in the code.

The snippet below exemplifies the correct way of declaring the **useEffect** function inside a component:

```javascript
// some code...
const name = props.name;
const [userAge, setUserAge] = useState(0);
useEffect(
  function () {
    // "1st part of useEffect"
    // specifies the side effects the event will create
    if (!title) return;
    document.title = `${name} has ${userAge}`;
    // "3rd part of useEffect" - specifie
    // specifies the cleanup function (more about this later)
    return () => (document.title = `Tell me your age!`);
  },
  // "2nd part of useEffect"
  // specifies when the effect will be run
  [name, userAge]
);
//some more code...
```

It's safe to assume **useEffect** as an event listener listening for dependecies changes. This means that effects react to upates to state and props listed in the dependency array, because the effect **depends** on them.

To sumarize, we can use dependency array to run effects when the component renders or re-renders as a way to synchronze components in our code whenever any of the dependencies is updated.

#### Diferent types of dependency array:

- `useEffect(fn, [x, y, z])`: the effect syncronizes with changes happened on either x, y, or z and so, it runs on mount and re-renders triggered by updating either x, y or z
- `useEffect(fn, [])`: the effect has no synchonization to any state or prop and so, it runs only during the mounting of the component
- `useEffect(fn)`: the effect synchronizes with everything is run on every render/re-render (this is knwon for being a bad practice)

<hr>

### The useEffect cleanup function:

Cleaning up effects in react can easly be done inside the **userEffect** function, by adding a so called "clean up function". This function is optional, meaning that not always we don't have to return one from a specific effect.

It's important to know that the clean up function not only runs after unmounting a component, but also when the component is re-rendering.

To sumarize, this function is necessary whenever the created side effect keeps happening after the component has been re-rendered or unmounted.

Some of the most common use cases of the cleanup function are:

- Making a HTTP request - use the cleanup function will cancel the request
- Making an API subscription - use the cleanup function will cancel the request
- Starting a timer - use the cleanup function will stop the timer
- Adding an event listenres - use the cleanup function to remove the listener

The snippet of code below is a simple example of how to use the cleanup function, which is returned to the application when a certain component is unmounted.

```javascript
// some code...
const name = props.name;
const [userAge, setUserAge] = useState(0);
useEffect(
  function () {
    if (!title) return;
    document.title = `${name} has ${userAge}`;
    // this is the clean up function for the component
    return () => (document.title = `Tell me your age!`);
  },
  [name, userAge]
);
//some more code...
```

Having useEffect responsbile for a single side effect makes a lot easier to cleanup those effects. This then suggests that it may be necessary to make use of multiple useEffect.

But remember DO NOT OVERUSE the useEffect hook. Make use of this ONLY when necessary, because as already discussed, the peferred method for creating side effects are by using event listeners!

<hr>
<br>

## Section_13:

### Rules of React Hooks:

React hooks are spcial built-in function what allows us to "hook" into some React internal mechanisms. We can define it better as APIs that allows us to:

- Create and access states from the Fiber tree (useState)
- Register side effects in the Fiber tree (useEffect)
- Maunally select DOM selections / elements
- Many other uses

Hooks in React always start with the word **use**, so it's easy to differentiate those from other functions defined in the code.

By creating a function with the word **use**, it's even possible to create custom hooks, by enabling the **reuse of non-visual logic**.

Hooks also give us the ability of creating functional components with their own state and side effects at different life cycle points (this ability was only possible in **class compoments**, before React 16.8).

React comes with lots of built-in hooks:

- Most used hooks
  - **useSate**
  - **useEffect**
  - **useReducer**
  - **useContext**
- Less used hooks
  - **useRef**
  - **useCallback**
  - **useTransition**
  - **useDeferredValue**
  - **useLayoutEffect**
  - **useDebugValue**
  - **useImperativeHandle**
  - **useId**
- Library used only:
  - **useSyncExternalStore**
  - **useInsertionEffect**

The simple rules of hooks:

1. Hooks can be called only on the top level of a component
1. Hooks are not called inside conditionals, loops, nested functions of after an early return
   > This rule ensures that hooks are always called on the same order, since they rely on this to work correctly
1. Hooks can only be called from React functions
1. Hooks are called only inside a functional component or a custom hook

<hr>
<br>

### **useState** hook in details:

The initial values passed inside the **useState** hook just matter during the initial render of a component.

So, if we assume the snippet of code below, the value of the state will not be updated and then, the state will always be the same defined at the initial render.

```javascript
// some code...

const [isTop, setIsTop] = useState(grade > 8);

//some more code...
```

A possible way to fix this is by making use of the hook **useEffect** like displayed below.

```javascript
// some code...

const [isTop, setIsTop] = useState(grade > 8);
useEffect(
  function () {
    setIsTop(grade > 8);
  },
  [grade]
);

// some more code...
```

The snippet of code above is not the optimal way of setting a state like that. By using the best react practices, the we should make use of derived states, just as displayed in the snippet below:

```javascript
// some code...

const isTop = grade > 8;

// some more code...
```

Remember that states are updated asynchronously, meaning that the snippet of code below would update just AFTER the whole component and the rest of code inside it is executed by React.

```javascript
// some code...

const [avgGrade, setAvgGrade] = useState(2);
// the state will be set to "6" until a new value is passed to avgGrade - this is called stale state
//after the RE-RENDER of the compoment which contains this code
setAvgGrade(8);
setAvgGrade((agvGrade + 10) / 2);

// some more code...
```

If it's necessary to update a state during the re-render proccess, the best prectice is to make use o callback functions, like shown below:

```javascript
// some code here...

const [avgGrade, setAvgGrade] = useState(2);
// this will have access to the current value passed to agvGrade during the re-render process and it will result in the end as "9"
setAvgGrade(8);
setAvgGrade((agvGrande) => (agvGrade + 10) / 2);

// some more code here
```

On the same way we did set final state values using callback functions, it's possible to starting state values with callback functions... This is called **lazy initial state**. The snippet below is a quick example on how to do that:

```javascript
const [grade, setGrade] = useState(function () {
  const newGrade = 10;
  return newGrade;
});
```

> **IMPORNTANT:**
>
> Pay attention to the fact that the callback function used in **useState** need to be "pure functions" that returns a value and they can not receive any arguments.

To sumarize:

```javascript
// creates state "simple way"
const [count1, setCount1] = useState(23);
// creates state "lazy way"
// the function must be pure and accept no arguments
// this is called only on initial render
const [count2, setCount2] = useState(() => return 23);

// updates state "simple way"
setCount1(100);
// updates state using callback - based on the current state
// the function must be pure and return the next state
// the function can not manipulate the current state - instead, we need to create a new "intermediary state" to be maniplated
setCount2 ((c) => c + 1);
```

<hr>
<br>

### **useRef** in details:

Let's assume we need to set focus over a DOM element with a class of `search`. If we make use of the current knowlege we have, it could be done by adding something like the snippet bellow to our code.

```javascript
// some code here...

useEffect(function () {
  const el = document.querySelector('.search');
  el.focus();
}, []);

// some more code here...
```

Even though that can work as predicted, that is not declarative (as it should be, because of the way of "React doing things") and also can generate issues in the application in case the dependency array of **useEffect** wasn't empty. So solve this problem, React has a hook, called **useRef**.

The **useRef** is used to create a reference inside React code which presists among renders, just like states. This reference is an **object** with a mutable **.current** property (unlike most of the things in React).

```javascript
//some code here...

const myRef = useRef('10');
myRef.current = 'My age is 10';

// some more code here...
```

The snippet above shows a simple way to make use of the **useRef** hook.

Because of the unique properties already described of refs (persistence and mutability) there are two use cases for refs:

1. Creating variables that presists along multiple renders, like for example storing the ID of a setTimeout function or previous state
1. Selecting and storing DOM elements

Refs are mainly used for data which are not rendered. They usually appear in event handlers or effects. If they are "related" to something to be rendered as part of a JSX, this means that instead of a ref, we should use a state.

One important aspect of ref is that we are not allowed write or read the `.current` in render logic, like we do with states. That would create undesireable side effects and to avoid those, the best way to work with those mutations to refs is inside a **useEffect** hook.

##### Comparing states and refs:

| **HOOK**   | **Pessists on renders?** | **Updates causes re-render?** | **Is immutable?** | **Has asynchronous updates?** |
| ---------- | ------------------------ | ----------------------------- | ----------------- | ----------------------------- |
| **states** | yes                      | yes                           | yes               | yes                           |
| **refs**   | yes                      | no                            | no                | no                            |

<hr>
<br>

### Custom hooks:

React is all about reusability and in React there are two things that we can reuse. Parts of the UI by creating components and logic.

Logic can be reused into two different ways:

- Regular functions if the logic does not contain any hooks
- Custom hooks if the logic contains hooks

Custom hooks allows us to re-use non-visual logic in multiple components when this logic contains one or more React hooks.

Each custom hook still should have a single purpose, so it can be reusable and ported between components or even different projects.

The rules of hooks already discussed still applies to custom hooks, for this being a hook.

```javascript
// some code...

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res)),
      [];
  });
  return [data, isFetching];
};

// some more code...
```

The code above is a simple example of how a data fetching custom hook could be created.

Note a few things about a custom hook:

- They are simple javascript functions which start with the word **use**, so React can recognize this as a hook
- They can receive and return any relevant data (usually objects or arrays)
- They need to have one or more React built-in hooks to abstract data on it

<hr>
<br>

## Section_14

### A bit of history:

Before 2019, components in React were written as classes with a `render()` function, responsible for displaying the component on screen, just like displayed in the "barebones"code for a simple counter below.

```javascript
import React from 'react';

class Counter extends React.Component {
  // this is equivalent of the function body
  render() {
    return (
      <div>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
```

Classes components do not support states, so in order to add states to a component, we need to set a constructor function, where we define the states as a huge object of states, instead of a single state variable for each state as done in functional components.

Also the way to access some state is a bit different. Because we are using classes, the use o the keywork `this` (which points to the current components insntace rendered) and the property `state` are required in order to access the state.

```javascript
// some code here...

constructor(props) {
  super(props);
  this.state = {count: 5};
}

// some more code here...

// accessing the state with the key words "this" and "state"
<span>{this.state.count}</span>
```

In order to create event handlers to classes components, we need to define those as class methods, always outside the `render()` function, because class components requires that the code inside the `render()` function to be as clean as possible. Not that to handle events in class components, it's necessary to bind them manually inside the constructor method, so they can be linked to the component instance in order to set states when those are updated on event handlers.

```javascript
// some code here...
constructor(props) {
  super(props);
  this.state: {count: 0}
  this.handleDrecrement: this.handleDecrement.bind(this);
  this.handleIncrement: this.handleIncrement.bind(this);
  this.handleReset: this.handleReset.bind(this);
}

handleDecrement() {
  this.setState((currState) => {
    return {count: currState.count - 1};
  });
}

handleIncrement() {
  this.setState((currState) => {
    return {count: currState.count + 1};
  });
}

handleReset() {
  this.setState({count: 0});
}

// some code here...
<button onClick={this.handleDecrement}>-</button>
<button onClick={this.handleIncrement}>+</button>
<button onClick={this.handleReset}>Reset counter</button>


// some more code here
```

> **IMPORTANT:**
>
> Even though the `render()` function needs to be as clean as possible, some small and simple logic can still be added to it!

The full code for a simple counter Component is displayed below:

```javascript
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDecrement() {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + this.state.count);

    return (
      <>
        <div>
          <button onClick={this.handleDecrement}>-</button>
          <span>
            {date.toDateString()} [{this.state.count}]
          </span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
        <div>
          <button onClick={this.handleReset}>Reset counter</button>
        </div>
      </>
    );
  }
}

export default Counter;
```

#### Differences between functional components and class components:

|                            | **Function Components**                                                                                                                                                                                                             | **Class Components**                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Introduced in**          | v16.8 (2019, with hooks)                                                                                                                                                                                                            | v0.13 (2015)                                                           |
| **How to create**          | Any type of JavaScript function                                                                                                                                                                                                     | ES6 classes definition, extending React.Component                      |
| **Reading props**          | Destructuring or props.x                                                                                                                                                                                                            | this.props.x                                                           |
| Local State                | useState hook                                                                                                                                                                                                                       | this.state = {state: value}<br>this.setState()                         |
| **Side effects/lifecycle** | useEffect hook                                                                                                                                                                                                                      | lifecycle methods                                                      |
| Event handlers             | functions                                                                                                                                                                                                                           | class methods                                                          |
| Returning JSX              | Return the JSX from function                                                                                                                                                                                                        | Return JSX from `render()` method                                      |
| Advantages                 | <ul><li>Easier to build (less boilerplate code)</li><li>Cleaner clode: `useEffect` combines all lifecycle-related code in a single place</li><li>Easier to share stateful logic</li><li>No need to use the `this` keywork</li></ul> | <ul><li>Lifecyle might be easier to understand for beginners</li></ul> |

#### Component lifecycle in class components:

They are special methods that all methods that each react component has access to, so we can manage side effects on each point of the componet lifecycle.

- **componentDidMount()**: called imediatelly after the render (similar to `useEffect` with empty dependency array)
- **componentDidUpdate(prevProps, prevState)**: called only during re-renders (similar to `useEffect` with variables inside the dependency array)
- **componentWillUnmount()**: called after a component is unmounted, (similar to return a cleanup function returned from useEffect)

<hr>
<br>

## Section_15:

A quick introduction and overview for the next section.

<hr>
<br>

## Section_16:

### **useReducer** hook:

The **useReducer** hook is a more advanced (and more complex) way to mange states in React than the **useState** hook.

The **useReducer** will always receive the previous state and a pure function (reducer function) as na action to produce te next state, just as displayed in the snippet of code below.

```javascript
import { useReducer } from 'react';

// some code here...
function reducer(state, action) {
  if (action.type === 'dec') return state - 1;
  if (action.type === 'inc') return state + 1;
  if (action.type === 'setCount') return action.payload;
}

const [count, dispatch] = useReducer(reducer, 0);
const dec = function () {
  // payload is optional here
  dispatch({ type: 'dec' });
};
const inc = function () {
  // payload is optional here
  dispatch({ type: 'inc' });
};

const setCount = function (e) {
  // payload is required here
  dispatch({ type: 'setCount', payload: Number(e.target.value) });
};
```

The dispatch function from the snippet of code above, works as the new state setter. It's returned by the **useReducer** and then used to set the new state value. As displayed, above, the dispatch function is "dispatching" an object with a pair of `key: values` to the **useReducer**.

This object can be "anything", but it's common to make use of the basic format/structure displayed on the snippet.

- Type usually represents the "name"/"type" of action to be excecuted by the **useReducer**
- Payload usually represents the value to be sent with the action to the **useReducer** (optional, depending on the logic of the new state to be set)

The **useReducer** is mostly used to manage multiple states at once and a good example of a better use of the **useReducer** is displayed on the code below.

```javascript
import {useReducer} from 'react;

// some code here...
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

// some more code here
const [state, dispatch] = useReducer(reducer, initialState);
const { count, step } = state;

const dec = function () {
    dispatch({ type: 'dec' });
  };

const inc = function () {
  dispatch({ type: 'inc' });
};

const defineCount = function (e) {
  dispatch({ type: 'setCount', payload: Number(e.target.value) });
};

const defineStep = function (e) {
  dispatch({ type: 'setStep', payload: Number(e.target.value) });
};

const reset = function () {
  dispatch({ type: 'reset' });
};
```

### **useReducer** in details:

Making use of the **useState** for managning states may not be enough for the following sigutations:

1. Components with a lot of state variables and state updates spread across many event handlers all over the component (or multiple components)
1. Multiple states updates needs to happen at the same time as a "reaction" to the same event
1. Updating a state which depends on other state(s)

For those cases, the best solution would be making use of the **\*useReducer** hook, because:

- useReducer is an alternative way to set states for complex states and related pieces of state related to each other, usually in a object (this can also be a sigle value).
- useReducer needs a reducer function, which contains all the logic required to update the state object, decoupling all the logic from the component, making the code more readable.

```javascript
const [state, dispatch] = useReducer(reducer, inititalState);
```

- The **reducer function** is a pure function (does not generate side effects) which takes the current state and an action (generally passed as an object) and returns the next state

```javascript
function reducer (state, action) {
  switch(action.type) {
    case 'type_1':
      // do something
    case 'type_2':
      // do something
    ...
    case 'type_n":
      // do something
    default:
      throw new Error('Unknown action...')
  }
}
```

- The action is usually an object with a "type" and a payload, which is basically an input data to be passwed with the action, which describes how the state should be updated
- The disatch function is returned by the **useReducer** hook and that function is used to trigger the state update by "sending actions" from event handlers to the reducer

```javascript
dispatch({type: 'action_type_with_payload', payload: /* some state update logic or value*/})
dispatch({type: 'action_type_without_payload'})
```

- The **reducer function** works in a similar way as the `array.reduce()`, by accumulating actions over time

### A quick comparison between **useState** and **useReducer**:

- **useState**:
  - Ideal for single or independent pieces of state (numbers, strings, singles arrays or object, etc.)
  - The logic to update the state is places in event handlers or effects, spreading it all over one or multiple components
  - Direct update states with **setter functions** returned from **useState**
  - State updates are imperative
  - Easy to understand and to use
- **useReducer**:
  - Ideal for multiple related pieces of state or states with a high level of complexicity(eg., an object with multiple values or nested objects/arrays)
  - The logic to update the state lives in a central place, decoupled from components, the so called reducer function
  - The update of the state happens via dispatching actions to the reducer funcion, making the updates more declarative, because complex states are mapped into "well named" actions
  - Can be more difficult to understand and implement

### When to use **useReducer** hook then?:

In order to understand when to use the **useReducer** hook, just answer to the questions below:

1. Do my code updates just a piece of state?
1. Do my states frequently update together?
1. Do mu code have 3 or more pieces of related states, including objects?
1. There are too many event handlers to make the components large and confusing?

**useState** should remain always the default choice for state management, but if by answering those questions or writing your code you find any issues in state managment, **useReducer** is the way to go.

<hr>
<br>

## Section_17:

### Creating a React Application with Vite:

In order to create a React Application with Vite, the steps below are required:

```powershell
# Creates the React-Vite application on a specific version
npm create vite@<version_number>


# Creates the React-Vite application on the latest version
npm create vite@latest
```

If promped with a question asking to install vite on your developement machine, press `y` and continue with the process, by providing the project name, framework and variant (aka, file type):

```powershell
# Framework: React
# Variant: Javascript
```

It's important that vite uses the extention `JSX` for react components instead of `JS` as create-react-app.

Remember to navigate to the directory where the project was created and use `npm install` and `npm run dev` in order to install the dependecies required for the project and to run the project after the dependencies instalation is completed.

Also it's important to notice that some aditional configurations may be required:

- ESLint settings:

  a. Run the following command to install eslint dependencies

  ```powershell
  npm i eslint vite-plugin-eslint eslint-config-react-app -D
  ```

  b. Edit the file `.eslintrc.cjs` and write the following code inside it:

  ```javascript
  module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
    },
  };
  ```

  c. Create a new file called `.eslintrc.jon` in the root folder of the project with the following contents:

  ```json
  {
    "extends": "react-app"
  }
  ```

  d. Config the vite application to use ESLint, by editing the file `vite.config.js`, so it looks like to something like:

  ```javascript
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import eslint from 'vite-plugin-eslint';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react(), eslint()],
  });
  ```

### Concepts of **Routing** and **Single Page** :

When it comes to React, routing means matching different **URLs** to different **UI views / components** using what we call as **routes**.

This enables user to **navigate between different application screens**, using the browser URL, while keeping the UI in sync with the browser URL.

For this, React relies on a 3rd-party library called **React Router**, which is one of the most important part of React developent, because it allows the creating of Single-Page Applications (SPAs).

SPAs are aplications executed entrirely on the client (browser), relying heavly on routes. JavaScript (React) is used to update the DOM, meaning that there is no hard loading of the whole page, but simply a rerender of components, making the whole user experience feels like a native app or a desktop application. Note that additional data from any web API can be loaded in this process without any problems, as long as the code written is not forcing a whole page to load itself.

In order to use routes in React, the instalation of the 3rd-party library **React Router** is required, as follows:

```powershell
# To install a specific version
npm i react-router-dom@<version_number>

# To install the latest version
npm i react-router-dom@latest
```

To define routes in a declarative way, we make use of some React components provided to us by the react-router librabry just installed as indicated above. The snippet of code below, displays how to declare the routes on a React application.

```javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from 'path/to/HomePage';
import Component1 from 'path/to/Component1';
import Component2 from 'path/to/Component2';
import PageNotFound from path/to/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='relave/path1/from/root' element={<Component1 />} />
        <Route path='relave/path2/from/root' element={<Component2 />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Note that the code above is not yet enough for creating a SPA, because the way those routes are defined at this moment will still force a reload of the whole page. In order to fix that, we need to add links between those routes, as displayed below:

```javascript
import { Link } from 'react-router-dom';

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/path1/from/root'>Component1</Link>
        </li>
        <li>
          <Link to='/path2/from/root'>Component2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
```

The code above was added to a reusable **"navigation"** component (which is then imported to each page), but it could also be added manually to all of the pages which need to be loaded with the routes defined in the application. Alternativelly, the component could also be added directly to the application but where to add this component will REALLY depends on how the application is implemented by the developer.

Also notice that the preferrable way to create the "navigation" component is by replacing the `<Link></Link>` to `<NavLink></NavLink>`, so React Router would nicely display which is the current component displayed.

### Styling options for React (or React SPAs):

It's important to remember that React "doesn't care" on how we decide to style our aplication and this is why there are so many different options for styling a React application. Most of those styling options are defined by 3rd-party libraries. The most common options are listed below:

1. **Inline CSS** inside each **JSX element**, by using the **style prop**, with a **local scope to the JSX element** and it's based on **CSS**
1. **CSS or Sass file** as a **external file**, by using the **className prop**, with a **global scope to the whole application** and it's based on **CSS** (this may cause some problems in big projects)
1. **CSS Modules** as **one external file per component**, by using the **className prop**, with a **local scope to a single component** and it's based on **CSS**
1. **CSS-in-Js** as a **external file or component file**, by **creating a new component**, with a **local scope to the component** and it's based on **JavaScript**
1. **Utility-first CSS, such as tailwindcss** inside each **JSX element**, by using the **className prop**, with a **local scope to the JSX element** and it's based on **CSS**
1. Using UI libraries such as **Material UI**, **Chakra UI** or **Mantine**, for example.

#### Using CSS modules

CSS modules already come installed with both `creact-react-app` and `vite`, so no aditional instalation is necessary. As discussed above, CSS modules are basically a CSS file defined per component. The file created needs to follow a special convention, by naving its name as follows: `Component_Name.module.css`, eg, `PageNavigation.module.css`.

Inside the file we write normal CSS, but with a small ceavat: NO HTML SELECTORS, like for example `<ul>` should be inserted the file. It's really advised to make use of classes only, to ensure that no global selector affect the appliction instead of the single component.

It's important to notice that by doing so,

Then, inside the component, we just import the CSS file created, define the correct `className prop` to where the styles whould be applyed and the styles defined are then applied to the component.

The way to make use of this styling technique is displayed in the code below:

```css
/* Component.module.css  */
.ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
```

```javascript
import styles from './Component.module.css';

function Component() {
  return (
    <ul className={styles.ul}>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
}

export default Component;
```

### Nested routes and Index route:

Nested routes used when part of the UI needs to be controlled by a part of the URL. A nested rounte than exists when a URL changes subs components displayed inside a bigger component.

Nested routes are declared inside an already existing route, just like displayed in the snippets of code below:

```javascript
// App.jsx
// some code here...
<Route path='path/to/parent/component' element={<ParentComponent />}>
  {/* defines the index route, aka the default children element to be rendered */}
  <Route index={<DefaultChildElement />} />
  <Route
    path='path/to/child1/component/relative/to/parent'
    element={<Child1Component />}
  />
  <Route
    path='path/to/child2/component/relative/to/parent'
    element={<Child2Component />}
  />
</Route>

// some more code here
```

```javascript
// ParentComponent.jsx

import { Outlet } from 'react-router-dom';
// other required imports

function ParentComponent() {
  // some code here
  return (
    <div>
      {/*some more code here*/}
      <Outlet />
      {/*some more code here*/}
    </div>
  );
}

export default ParentComponent;
```

### URL's as state management

The URL is an excellent place to store UI states (states what would alter how the UI should look like) and can be used as an alternative to **useState** in some situations such as: opening and closing panels, selected list item, list sorting order, applied filter, etc.

Some advantages of using URL as a state managment are:

1. This is an easy way to store state in a global place which all components in the app have access.
1. It's a good way to "pass" data from one page to another
1. Makes possible to bookmark and share the page with the exact UI state it had when bookmarking the URL.

To sotre states using URLs, we make use of the params pr query strings associated to a spepcific path that points to a component.

```powershell
https://www.mysite.com/app/greet/pt?mygreeting=hello

# app/greet points to the component path "app/greet"
# pt is a param of the URL (useful to pass data to the next page)
# mygreeting=hello is a query string (useful to store gobal states)
```

To make use of this technique, three steps are required:

- Create a new route (can be either a nested route or not - it depends on the application):

```javascript
// some code here...
<Route path='path/to/compoment/:paramName' element={compoment} />
// some more code here...
```

- Link the new route:

```javascript
// some code here...
<Link to='paramName?stateVar1=stateVal1&stateVar2=stateVal2' />
// some more code here...
```

- Read the state from the new route, making use of the useParams hook, provided by **React Router**, where the use of those params are necessary

```javascript
// react imports
import { useParams, useSearchParams } from 'react-router-dom';

// some code here...
// access the param part of the URL
const { paramName } = useParams();
console.log(paramName);

// access the query string of the URL
const [seachParams, setSearchParams] = useSearchParams();
const stateVal1 = searchParams.get('stateVal1');
const stateVal2 = searchParams.get('stateVal2');
console.log({ stateVal1, stateVal2 });
// some more code here...
```

### Programmatic imperative navigation **useNavigate** custom hook:

Programmatic navigation means navigating (imperativelly) to a specific link without the necessity of an user to interact with the UI to enter that link. A common use case of behavior is right after submiting a form, because most of the times we with to send the user to a different page, without the need of clicking links.

The best way of making use of this hook is by attaction the returned function which "redirects" the URL to a different one inside an event handler, like a button click - for example, as displayed below:

```javascript
// react imports...
import { useNavigate } from 'react-router-dom';
// other imports...

const navigate = useNavigate();

//some code here

// navigates to a specific url
<button onClick={() => navigate('new/url')}>Click me!</button>;

// navigates back in history
<button onClick={() => navigate(-1)}>Go back</button>;
```

### Programmatic declarative navigation with `<Navigate />`:

The `<Navigate>` component is not used anymore after the custom hook **useNavigate** was implement on React. Although there are some specific use cases where making use of this component can be done, and that's mostly inside nested routes, such as displayed below:

```javascript
// some code here

// the use of replace will allow to "move back" on history, if necessary
<Route element={<Navigate replace to='path/to/redirect' />} />

//some more code here
```

This component can be seen as a "redirect" component, because as soon as a specific path is reached, that will automatically "redirect" to the path specified as the `to` property of the `<Navigate />` component.

<hr>
<br>

## Section_18:

### The **Context API**:

The Context API can be used to solve the problem known **prop drilling** which is better exemplied as passing a prop from a parent component to a deeply nested child compoment.

We already know that one of the possible solutions to this is creating a better component position. However, doing so it not always possible, meaning that a component composition passing the whole **children prop** not always solve the problem.

So, it would be necessary a way to simply pass that prop from the parent directly to these "deeply nested child components", that is where the Context API comes in place.

The Context API bascially allows components to read states from anywhere in the application, as long as those states are shared by a "context".

Technically, the **Context API** is a system used to pass data through the app without having to pass this data as props down the while app tree, like a "broadcasting of a global state" to the whole application.

The Context API is composed of some parts:

1. **Provider**: give all child components access to a specific `value`, being placed anywhere in the tree, although it's preferentially defined at the top level of the application.
1. **Value**: data which needs to be available to all components, such states and functions
1. **Consumers**: components which are "subscribed to the context", with the hability to read the **Value** passed to and by the **Provider**.

Note that because this value is shared between multiple consumers, it means that any update to the values inside the provider update, ALL consumers subscribed to a specific context get re-rendered, as already expected because of the change of props and or states.

### Creating and providing a **Context**:

In order to create a context, firt we need to notice that that is done by calling the **createContext** function import from React, which will return a "component" with the values that we need to share between the subscribers of this context.

The function accepts an optional value, which normally is set to empty or `null`, to prevent that value to change over time.

```javascript
import { createcontext } from 'react';

// the variable has is decalred like that because it will return a "component"
// and as we know, components are declared with initial capital letter
const MyContext = createContext();
```

The component created is then used as the parent component of all the compoments which require access to the created context with an object with all the "props" to be passed to the child elements as the value property of the component, just as shown below:

```javascript
// some code here...
<MyContext.Provider
  value={{
    prop1: value_prop1,
    prop2: value_prop2,
  }}
>
  <Component1 />
  <Component2 />
</MyContext.Provider>
```

And in order to "consume" the values set on the created context, we make use of the **useContext** hook, inside the component which will be registered as the consumer of the context, as follows:

```javascript
// Component1.js

import { useContext } from 'react';

function Component1() {
  const { prop1 } = useContext(MyContext);

  return <div>{prop1}</div>;
}

// some more code here
```

A optimal way to make use of this tool is mainly creating the context and a custom hook in a separated file, just like the one shown in the code below, then making use of the functions exported from there on the components which required the context.

```javascript
// MyContext.js
import {createContext, useContext, useState} from 'react';

const ContextComponent = createContext();

function MyContext ({children}) {
  const [val1, setVal1] = useState('My value 1');
  const [val2, setVal2] = useState([1, 2, 3]);

  function handleLogVal() {
    console.log({val1, val2})
  }

  return
    <ContextComponent.Provider
      value= {
        val1,
        val2,
        handleLogVal
      }
    >
      {children}
    </ContextComponent.Provid>
}

function useMyContext() {
  const context = useContext(ContextComponent)
  // prevents the use of the context outside the scope on which it was defined
  if (context === undefined) throw new Error ("Context used out of scope...")
  return context
}

export {MyContext, useMyContext}
```

```javascript
// App.js

// react imports ...
import { MyContext, useMyContext } from 'path/to/MyContext';

// some code here
function App() {
  return (
    <>
      <Component1 />
      <MyContext>
        <Component2 />
      </MyContext>
    </>
  );
}

// some code here and definition of other compoments which do not use the imported context

function Component2() {
  const { val1, val2, handleLogVal } = useMyContext();

  // do something with the de-structured values from the imported context.
}

// some more code here
```

It's HIGHLY advisable that contexts are created only including "props" which are related to each other. For each new set of props that need to be passed from parent to child may be necessary a new context, in order to improve readbility of code and perfomance improvement.

### Context API and state management:

States can be classified into terms of accessibility or domain.

- Acesssiblity:
  - Local state: needed and accessible by one or few components
  - Global state: needed by many components and it's accessible to all components in the application
- Domain - Remote state: application data from a remote server (API) usually is asynchrownous because they may need refetching and updating by the use of some specialized tools - UI state: everything else, like for example, theme, filters, form data, etc - usually synchronous and stored in the application, being easy to manage because this do not interact with any server

#### State placement options:

|                  | Tools used                                       | When to use                               |
| ---------------- | ------------------------------------------------ | ----------------------------------------- |
| Local component  | **useState**, **useReducer** or **useRef**       | Local state                               |
| Parent component | **useState**, **useReducer** or **useRef**       | Lifting up state                          |
| Context          | **Context API** + **useState** or **useReduger** | Global state (preferably UI state)        |
| 3rd-party libs   | **Redux**, **React Query**, **SWR**              | Global state (remote or UI)               |
| URL              | **React Router**                                 | Global state, passing between pages/views |
| Browser          | **Local storage**, **session storage**           | Storing data on user browser              |

To sumarize, the best tools to manage all the possible types of state are:

1. Local + UI state:
    1. **useState**, **useReducer**, **useRef**
1. Local + Remote state:
    1. **fetch** + **useEffect** + **useState**/**useReducer** (used on small application)
1. Global + UI state: 
    1. **Context API** + **useState**/**useReducer**
    1. **Redux**, **Zustand**, **Recoil**
    1. **React Router**
1. Global + Remote state:
    1. **Context API** + **useState**/**useReducer**
    1. **Redux**, **Zustand**, **Recoil**
    1. **React Query**
    1. **SWR**
    1. **RTK Query**

<hr>
<br>
