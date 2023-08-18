import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <>
      <Steps />
      {/* <Steps /> */}
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((currStep) => currStep + 1);
    }
  }
  return (
    <div>
      <button
        className='close'
        onClick={() => setIsOpen((currIsOpen) => !currIsOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <Content step={step}>
            <p>{messages[step - 1]}</p>
            <div className='buttons'>
              <Button
                bgColor='#cccccc'
                textColor='#7950f2'
                onClick={() => alert(messages[step - 1])}
              >
                Learn how
              </Button>
            </div>
          </Content>
          <div className='buttons'>
            <Button
              bgColor='#7950f2'
              textColor='#ffffff'
              onClick={handlePrevious}
            >
              <span>👈</span>
              Previous
            </Button>
            <Button bgColor='#7950f2' textColor='#ffffff' onClick={handleNext}>
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Content({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
