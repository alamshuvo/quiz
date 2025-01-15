
import './App.css'

import Question from './pages/home/Question'
import QuizSummary from './pages/home/QuizSummary'
import { useAppSelector } from './redux/hook'



function App() {
 const {quizCompleate}= useAppSelector((state)=>state.quiz)

  return (
    <>
    <h3 id='aa' className='text-9xl mb-8 bg-slate-400 p-4 rounded-lg border-b-2 border-black shadow-lg shadow-blue-300'>Quiz app</h3>
    {
      !quizCompleate ? <Question></Question>:<QuizSummary></QuizSummary>
    }
    </>
  )
}

export default App
