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
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
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

In this lesson an application called `pizza-menu` was created and it's files can be found [here](Section_03/02-pizza-menu).

After the application is created, using

```powershell-interactive
npm start
```
will launch the created application