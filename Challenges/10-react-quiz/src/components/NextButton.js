import { useQuiz } from "../contexts/QuizContext"

function NextButton() {
  const {dispatch, answer, index, numQuestions} = useQuiz()
  if (answer === null) return null
  if (index < numQuestions - 1) return (
    <div>
      <button className="btn btn-ui" onClick={() => dispatch({type: 'question/next'})}>Next</button>
    </div>
  )
  if (index === numQuestions - 1) return (
    <div>
      <button className="btn btn-ui" onClick={() => dispatch({type: 'quiz/finished'})}>Finish</button>
    </div>
  )

}

export default NextButton
