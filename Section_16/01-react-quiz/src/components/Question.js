import Options from './Options'

function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  )
}

export default Question
