function FinishScreen({ points, maxPoints, highscore, dispatch }) {
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
      <p className='highscore'>Your highscore: {highscore} points</p>
      <button className="btn btn-ui" onClick={()=>dispatch({type: 'restart'})}>Restart Quiz</button>
    </>
  );
}

export default FinishScreen;
