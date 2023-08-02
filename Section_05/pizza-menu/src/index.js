import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renders the app in non-sctrict mode
// root.render(<App />);

// Renders the App in strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
