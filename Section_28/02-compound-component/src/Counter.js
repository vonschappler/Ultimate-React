import { createContext, useContext, useState } from 'react';

const ConterContext = createContext();

function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <ConterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </ConterContext.Provider>
  );
}
export default Counter;

function Count() {
  const { count } = useContext(ConterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(ConterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(ConterContext);
  return <button onClick={decrease}>{icon}</button>;
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
