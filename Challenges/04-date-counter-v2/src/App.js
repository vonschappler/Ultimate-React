import { useState } from 'react';

function SliderController({ text, value, handler }) {
  return (
    <>
      <span>
        {text} {value}
      </span>
      <div>
        <input
          type='range'
          min='0'
          max='100'
          onChange={handler}
          value={value}
        />
      </div>
    </>
  );
}

function InputController({ value, handleChange }) {
  return (
    <input
      className='input'
      type='text'
      value={value}
      onChange={handleChange}
    />
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()).getTime());

  const handleSlideChange = (evt) => {
    setStep(Number(evt.target.value));
  };

  const handleBack = () => {
    setCounter((currCounter) => currCounter - step);
    setDate((currDate) => currDate - step * 86400000);
  };

  const handleFwd = () => {
    setCounter((currCounter) => currCounter + step);
    setDate((currDate) => currDate + step * 86400000);
  };

  const handleChange = (evt) => {
    setCounter(Number(evt.target.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDate(new Date(Date.now()).getTime() + counter * 86400000);
  };

  const handlerR = () => {
    setStep(0);
    setCounter(0);
    setDate(new Date(Date.now()).getTime());
  };

  return (
    <>
      <SliderController
        text='Move days by: '
        value={step}
        handler={handleSlideChange}
      />
      <button className='btn btn-circle' onClick={handleBack}>
        &minus;
      </button>
      <form onSubmit={handleSubmit}>
        <InputController value={counter} handleChange={handleChange} />
      </form>
      <button className='btn btn-circle' onClick={handleFwd}>
        +
      </button>
      <div>
        {counter === 0 ? (
          <span>Today is {new Date(date).toDateString()}</span>
        ) : (
          <span>
            {counter < 0 ? -counter : counter} days
            {counter < 0 ? ' ago was ' : ' from today will be '}
            {new Date(date).toDateString()}
          </span>
        )}
        {(counter !== 0 || step !== 0) && (
          <div>
            <button className='btn btn-reset' onClick={handlerR}>
              Reset counter
            </button>
          </div>
        )}
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
