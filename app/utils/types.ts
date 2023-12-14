type QuizQuestion = {
  id: number;
  quizName: string;
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
