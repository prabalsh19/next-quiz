import { createSlice } from "@reduxjs/toolkit";

const quiz = createSlice({
  name: "quiz",
  initialState: {
    quizDetail: {
      quizId: 0,
      quizState: [],
    },
  },
  reducers: {
    addAnswer: (state, action) => {
      console.log(action);
      state.quizDetail.quizState.push(action.payload);
    },
  },
});

export default quiz.reducer;
export const { addAnswer } = quiz.actions;
