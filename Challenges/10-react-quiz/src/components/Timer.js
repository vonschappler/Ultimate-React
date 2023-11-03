import { useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  console.log(secondsRemaining);
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'timer/start' });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className='timer'>
      {min < 10 && '0'}
      {min}:{sec < 10 && '0'}
      {sec}
    </div>
  );
}

export default Timer;
