import { useState } from 'react';

function Control({ text, value, handlerD, handlerU }) {
  return (
    <div>
      <button className='btn-circle' onClick={handlerD}>
        &minus;
      </button>
      {text === 'Counter' && value !== 0 ? (
        <span>
          {text}: {value < 0 ? `${-value} days back` : `${value} days ahead`}
        </span>
      ) : (
        <span>
          {text}: {value}
        </span>
      )}
      <button className='btn-circle' onClick={handlerU}>
        +
      </button>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()).getTime());
  const handleStepDown = () => {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
  };
  const handleStepUp = () => setStep((currStep) => currStep + 1);
  const handleCountDown = () => {
    setCounter((currCount) => currCount - step);
    setDate((currDate) => currDate - step * 86400000);
  };
  const handleCountUp = () => {
    setCounter((currCount) => currCount + step);
    setDate((currDate) => currDate + step * 86400000);
  };
  const handlerR = () => {
    setStep(0);
    setCounter(0);
    setDate(new Date(Date.now()).getTime());
  };

  return (
    <>
      <Control
        text='Step'
        value={step}
        handlerD={handleStepDown}
        handlerU={handleStepUp}
      />
      <Control
        text='Counter'
        value={counter}
        handlerD={handleCountDown}
        handlerU={handleCountUp}
      />
      {counter === 0 ? (
        <span>Today is {new Date(date).toDateString()}</span>
      ) : (
        <span>
          {counter < 0 ? -counter : counter} days
          {counter < 0 ? ' ago was ' : ' from today will be '}
          {new Date(date).toDateString()}
        </span>
      )}
      <div>
        <button className='btn-reset' onClick={handlerR}>
          Reset counter
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;
