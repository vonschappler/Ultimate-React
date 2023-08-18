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

export default Stats;
