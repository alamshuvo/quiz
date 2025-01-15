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
    reducers:{}

})

export default quizSlice.reducer