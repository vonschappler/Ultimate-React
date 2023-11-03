import { useQuiz } from '../contexts/QuizContext';

function FinishScreen() {
  const { points, maxPoints, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;
  let emoji;

  if (percentage === 100) emoji = '🥇';
  if (percentage >= 50 && percentage < 100) emoji = '🥈';
  if (percentage > 0 && percentage < 50) emoji = '🥉';
  if (percentage === 0) emoji = '🤦‍♀️';

  return (
    <>
      <p className='result'>
        {emoji} You scored <strong>{points}</strong> out of {maxPoints} with{' '}
        {Math.ceil(percentage)}% right answers!
      </p>
      <p className='highscore'>Your highscore: {highScore} points</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'quiz/restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
