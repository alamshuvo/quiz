import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, preQuestion } from "@/redux/features/quiz/QuizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControll() {
  const dispatch = useAppDispatch();
  const { question, curentQuestionIndex, userAnswers} = useAppSelector(
    (state) => state.quiz
  );
const isAnswerSelected = userAnswers[curentQuestionIndex] !== null

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePrevQuestion = () => {
    dispatch(preQuestion());
  };

  const handleComplete = ()=>{
    dispatch(completeQuiz())
  }
  const isCompleteQuiz = isAnswerSelected || curentQuestionIndex !== question.length-1

  return (
    <div className="flex justify-between items-center mt-4 space-x-3">
      {
        <Button
          disabled={curentQuestionIndex === 0}
          onClick={handlePrevQuestion}
        >
          Previous
        </Button>
      }
      {

        curentQuestionIndex<question.length-1 &&
        <Button
        disabled={!isAnswerSelected}
          onClick={handleNextQuestion}
        >
          Next{" "}
        </Button>
      }
      {curentQuestionIndex===question.length-1 &&   <Button 
      disabled={!isCompleteQuiz}
        onClick={handleComplete}>Complete Quiz</Button>}
    
    </div>
  );
}
