import { useEffect, useState } from 'react';

export default function App() {
  const [value, setValue] = useState('0');
  const [input, setInput] = useState('USD');
  const [output, setOutput] = useState('USD');
  const [converted, setConverted] = useState('0');

  useEffect(
    function () {
      const fetchConversion = async () => {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${input}&to=${output}`
        );
        console.log(res);
        const data = await res.json();
        setConverted(data.rates[output]);
      };
      if (!value || value === '0') return;
      if (input === output) return;
      fetchConversion();
    },
    [value, input, output]
  );

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select value={output} onChange={(e) => setOutput(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <p>
        ${value} {input} converted to {output} is equal ${converted}
      </p>
    </div>
  );
}
