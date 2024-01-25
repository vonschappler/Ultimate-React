import { useQuiz } from '../contexts/QuizContext';

function Options() {
  const { answer, questions, dispatch, index } = useQuiz();
  const question = questions.at(index);
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((opt, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={opt}
          onClick={() =>
            dispatch({ type: 'question/answered', payload: index })
          }
          disabled={hasAnswered}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
