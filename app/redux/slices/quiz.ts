import { createSlice } from "@reduxjs/toolkit";

const initialState: QuizState = {
  quizDetail: {
    quizId: "0",
    quizState: [],
  },
};

const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.quizDetail.quizState.push(action.payload);
    },
  },
});

export default quiz.reducer;
export const { addAnswer } = quiz.actions;
