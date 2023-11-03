import { createContext, useContext, useReducer, useEffect } from 'react';

const SECS_PER_QUESTION = 30;
const BASE_URL = `http://localhost:8000`;

const initialState = {
  questions: [],
  numQuestions: 0,
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  maxPoints: 0,
  highScore: 0,
  secondsRemaining: null,
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'questions/loaded':
      return { ...state, questions: action.payload, status: 'ready', numQuestions: state.questions.length };
    case 'questions/failed':
      return { ...state, status: 'error' };
    case 'quiz/start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        index: 0
      };
    case 'question/answered':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
        maxPoints: state.questions.reduce((prev, curr) => prev + curr.points, 0)
      };
    case 'question/next':
      return { ...state, index: state.index + 1, answer: null };
    case 'quiz/finished':
      return {
        ...state,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
        status: 'finished',
      };
    case 'quiz/restart':
      return { ...initialState, status: 'ready', questions: state.questions, numQuestions: state.questions.length };
    case 'timer/start':
      console.log(state.secondsRemaining)
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finised' : state.status,
      };
    default:
      throw new Error(`Unknwon action type...`);
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    {
      questions,
      numQuestions,
      status,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      error,
      maxPoints
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch(`${BASE_URL}/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'questions/loaded', payload: data }))
      .catch((err) => dispatch({ type: 'questions/failed' }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        numQuestions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        error,
        maxPoints,
        dispatch
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context === undefined) throw new Error(`QuizContext used out of scope`);
  return context;
}

export { QuizProvider, useQuiz };
