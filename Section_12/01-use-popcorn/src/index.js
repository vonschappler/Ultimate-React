import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import './index.css';
// import App from './App';
import AppWrong from './App-wrong';

function TestRating() {
  const [movieRating, setMovieRating] = useState(0)
  return <div>
    <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
    <p>This movie was rated {movieRating} stars</p>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {<AppWrong />}
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={24} color='red' defaultRating={3} />
    <TestRating /> */}
  </React.StrictMode>
);
