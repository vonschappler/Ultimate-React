import Counter from './Counter';
import './styles.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter
        iconIncrease='+'
        iconDecrease='-'
        label='My NOT so flexible counter'
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      />
    </div>
  );
}
