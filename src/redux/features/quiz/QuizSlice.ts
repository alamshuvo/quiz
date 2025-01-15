import { quizData } from '@/pages/home/QuizData'
import {createSlice} from '@reduxjs/toolkit' 

interface IQuiz {
    question:typeof quizData;
    curentQuestionIndex:number;
    userAnswers : (string | null)[];
    quizCompleate:boolean
}

const initialState : IQuiz ={
    question:quizData,
    curentQuestionIndex:0,
    userAnswers:Array(quizData.length).fill(null),
    quizCompleate:false,

}

export const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        setAnswer:(state,action)=>{
            const {questionIndex,answer} = action.payload;
            console.log(questionIndex,answer,"slice tekhe");
            state.userAnswers[questionIndex]= answer
        },
        nextQuestion:(state)=>{
            if (state.curentQuestionIndex<state.question.length-1) {
                state.curentQuestionIndex+=1
            }
        },
        preQuestion:(state)=>{
        if (state.curentQuestionIndex>0) {
            state.curentQuestionIndex -=1
        }
        }
    }

})

export const {setAnswer,nextQuestion,preQuestion} =quizSlice.actions

export default quizSlice.reducer