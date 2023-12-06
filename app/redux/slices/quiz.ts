import { createSlice } from "@reduxjs/toolkit";

export const quiz = createSlice({
  name: "quiz",
  initialState: {
    quizState: [],
  },
  reducers: {
    inializeQuiz: (state, action) => {
      state.quizState = action.payload;
    },
  },
});
