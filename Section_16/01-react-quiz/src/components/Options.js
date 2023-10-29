function Options({question}) {
  return (
    <div className='options'>
      {question.options.map((opt) => (
        <button className='btn btn-option' key={opt}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options
