
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/QuizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControll from "./QuizControll";




export default function Question() {
  const dispatch = useAppDispatch()
const {question,curentQuestionIndex} = useAppSelector((state)=>state.quiz)
console.log(question,curentQuestionIndex);
const curentQuestion = question[curentQuestionIndex];
console.log(curentQuestion);

const handleAnsChange = (ans:string)=>{
 dispatch(setAnswer({questionIndex:curentQuestionIndex,answer:ans}))
 
}



  return (
    <div className="flex justify-center items-center"><Card className="w-2/4 m-auto">
    <CardHeader>
      <CardTitle>{curentQuestion.question}</CardTitle>
      <CardDescription className="flex">Question: {curentQuestionIndex+1} of {question.length}</CardDescription>
    </CardHeader>
    <CardContent >
      {
        curentQuestion.options.map((option,index)=><Button onClick={()=>handleAnsChange(option)}  key={index} className="w-full mt-3 good" size={"lg"}>{option}</Button>)
      }
     <QuizControll></QuizControll>
    </CardContent>
    <CardFooter className="flex justify-between">
 
    </CardFooter>
  </Card></div>
  )
}
