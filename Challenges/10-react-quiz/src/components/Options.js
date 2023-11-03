function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null
  return (
    <div className='options'>
      {question.options.map((opt, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswered
            ? index === question.correctOption
              ? 'correct'
              : 'wrong' : ""}`}
          key={opt}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswered}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
