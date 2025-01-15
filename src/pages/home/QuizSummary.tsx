import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hook";

export default function QuizSummary() {
  const {question,userAnswers} = useAppSelector((state) => state.quiz)
  const correctAnswersCount = question.reduce((count,qna,index)=>{
 return  qna.correctAnswer === userAnswers[index] ? count+1 :count
  },0)
const correctPercenteage = parseFloat(((correctAnswersCount / question.length) * 100).toString())

  return (
    <div>
      <Card className="w-[450px] mx-auto p-4">
        <CardHeader>
          Quiz Sumarry
        </CardHeader>
        <CardContent className="space-y-4  border-2 border-black ">
          <h3>You Got {correctAnswersCount} out of {question.length}</h3>
          <div className="flex justify-center items-center">
          <Progress value={correctPercenteage} ></Progress>
          </div>
          <p> You got {correctPercenteage}% out of 100%</p>
          <p>Your Correct Answer is {correctAnswersCount}</p>
         <p>Your Incorrect Answer is {question.length - correctAnswersCount}</p>
        </CardContent>
       
      </Card>
    </div>
  )
}
