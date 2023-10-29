import { useEffect, useReducer } from 'react';
import Error from './Error';
import FinishScreen from './FinishScreen';
import Header from './Header';
import Loader from './Loader';
import Main from './Main';
import NextButton from './NextButton';
import Progress from './Progress';
import Question from './Question';
import StartScreen from './StartScreen';

const initialState = {
  questions: [],

  // loading, error, ready, active or finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready'};
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {...state, status: 'finished', highscore: state.points > state.highscore ? state.points : state.highscore}
    default:
      throw new Error('Action unknow');
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore}, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0)

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className='app'>
      <Header />
      <Main className='main'>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress index={index} numQuestions={numQuestions} points={points} maxPoints={maxPoints} answer={answer} />
            <Question
              question={questions.at(index)}
              dispatch={dispatch}
              answer={answer}
              points={points}
            />{' '}
            <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index}/>
          </>
        )}
        {status === 'finished' && <FinishScreen points={points} maxPoints={maxPoints} highscore={highscore}/>}
      </Main>
    </div>
  );
}
