import { useState } from 'react';

function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const totalTip = (bill * (tip1 + tip2)) / 200;
  const totalBill = bill + totalTip;
  function handleReset() {
    setBill('');
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={tip1} onSelect={setTip1}>
        How do you evaluate our service?
      </SelectPercentage>
      <SelectPercentage tip={tip2} onSelect={setTip2}>
        How does your guests evaluate our service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} totalTip={totalTip} totalBill={totalBill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was your order expenses? </label>
      <input
        type='text'
        placeholder='Expenses / bill value'
        value={bill}
        onChange={(evt) => onSetBill(Number(evt.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ tip, onSelect, children }) {
  return (
    <div>
      <label>{children} </label>
      <select
        value={tip}
        onChange={(evt) => onSelect(Number(evt.target.value))}
      >
        <option value='0'>It was a total mess (0%)</option>
        <option value='5'>It was acceptable (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>It was awesome (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, totalTip, totalBill }) {
  return (
    <h3>
      Your expenses were: ${!bill ? 0 : bill}
      <br />
      Total tips to pay: ${totalTip}
      <br />
      The total value to pay (${!bill ? 0 : bill} + ${totalTip}): ${totalBill}
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
