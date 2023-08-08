import { useState } from 'react';

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItem }) {
  const [qty, setQty] = useState(1);
  const [desc, setDesc] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!desc) return;
    const newItem = {
      description: desc,
      quantity: qty,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    setDesc('');
    setQty(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={qty} onChange={(evt) => setQty(Number(evt.target.value))}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={desc}
        onChange={(evt) => setDesc(evt.target.value)}
      />
      <button>Add item</button>
    </form>
  );
}

function PackingList({ items, onDelItem, onToggleItem }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelItem={onDelItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDelItem, onToggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className='stats'>
        <p>Start adding items to your packing list!</p>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentItems = Math.round((packedItems / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentItems === 100
          ? `You got everything you need! ✈️ Safe travels ✈️`
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentItems}%)`}
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelItem={handleDelItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
