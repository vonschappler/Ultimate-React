import { useState } from 'react';

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

export default Form;
