import { useState } from 'react';

function App() {
  let totalBill = 0;
  let totalTips = 0;
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState([0, 0]);
  function handleChangeBill(value) {
    setBill(Number(value));
    totalBill = bill + (bill * totalTips) / 100;
    console.log({ tips, totalTips, totalBill });
  }
  function handleReset() {
    setBill(0);
    setTips([0, 0]);
  }
  function handleChangePercent(id, value) {
    if (id === 'tip-1') {
      setTips((currTips) => [Number(value), currTips[1]]);
    }
    if (id === 'tip-2') {
      setTips((currTips) => [currTips[0], Number(value)]);
    }
    totalTips = tips.reduce((total, tip) => total + tip, 0);
    console.log({ tips, totalTips, totalBill });
  }
  return (
    <>
      <form onSubmit={(evt) => evt.preventDefault()}>
        <Bill currBill={bill} onChangeBill={handleChangeBill}>
          <label>How much did your order cost? </label>
        </Bill>
        <TipPercentage
          onChangeTip={handleChangePercent}
          key='tip-1'
          id='tip-1'
          value={tips[0]}
        >
          <label>How do you evaluate our service? </label>
        </TipPercentage>
        <TipPercentage
          onChangeTip={handleChangePercent}
          value={tips[1]}
          id='tip-2'
          key='tip-2'
        >
          <label>How does your friend evaluate our service? </label>
        </TipPercentage>
        <Output>
          Your expenses were ${bill}.<br />
          The tip to be paid for the service is ${totalTips}.
          <br />
          The total value of the bill will be ${totalBill}.
        </Output>
        <Button onReset={handleReset}>Reset</Button>
      </form>
    </>
  );
}

function Bill({ currBill, onChangeBill, children }) {
  return (
    <div>
      {children}
      <input
        value={currBill}
        onChange={(evt) => onChangeBill(evt.target.value)}
      />
    </div>
  );
}

function TipPercentage({ id, onChangeTip, children }) {
  return (
    <div>
      {children}
      <select
        id={id}
        onChange={(evt) => onChangeTip(evt.target.id, evt.target.value)}
      >
        <option value={0}>The service was a mess (0%)</option>
        <option value={5}>The service was accectible (5%)</option>
        <option value={10}>The service was good (10%)</option>
        <option value={0}>The service was awesome! (20%)</option>
      </select>
    </div>
  );
}

function Output({ children }) {
  return <h3>{children}</h3>;
}

function Button({ onReset, children }) {
  return <button onClick={onReset}>{children}</button>;
}

export default App;
