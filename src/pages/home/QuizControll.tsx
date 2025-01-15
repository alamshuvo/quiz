import { Button } from "@/components/ui/button";
import { nextQuestion, preQuestion } from "@/redux/features/quiz/QuizSlice";
import { useAppDispatch } from "@/redux/hook";


export default function QuizControll() {
const dispatch = useAppDispatch()
const handleNextQuestion =()=>{
dispatch(nextQuestion())
 
}
const handlePrevQuestion = ()=>{
  dispatch(preQuestion())
}

  return (
    <div className="flex justify-between items-center mt-4 space-x-3">
        <Button onClick={handlePrevQuestion}>Previous</Button>
        <Button onClick={handleNextQuestion}>Next </Button>
    </div>
  )
}
