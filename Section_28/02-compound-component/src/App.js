import Counter from './Counter';
import './styles.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>

      <div>
        <Counter>
          <Counter.Decrease icon='-' />
          <Counter.Count />
          <Counter.Increase icon='+' />
          <Counter.Label>Compound Counter</Counter.Label>
        </Counter>
      </div>

      <div>
        <Counter>
          <Counter.Decrease icon='⬅️' />
          <Counter.Count />
          <Counter.Increase icon='➡️' />
        </Counter>
      </div>
    </div>
  );
}
