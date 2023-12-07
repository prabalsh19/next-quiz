type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};
type QuizState = {
  quizDetail: {
    quizId: string;
    quizState: QuizQuestion[];
  };
};
