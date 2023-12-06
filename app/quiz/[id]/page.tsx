"use client";
import { addAnswer } from "@/app/redux/slices/quiz";
import { questions } from "@/app/utils/constant";
import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const QuizDetail = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const currentQuestion: QuizQuestion = questions[index];

  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = () => {
    dispatch(addAnswer({ ...currentQuestion, userAnswer: selectedOption }));
    setIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    router.push("/submitted");
  };

  return (
    <div className="bg-slate-100 mx-4 mt-10 px-4 py-6 rounded-md">
      <Heading as="h3" size="lg">
        {index + 1}. {currentQuestion.question}
      </Heading>
      {currentQuestion.options.map((option, index) => (
        <p
          key={index}
          onClick={() => setSelectedOption(option)}
          className={`mt-4 shadow-sm p-2 bg-slate-200 rounded-sm cursor-pointer ${
            selectedOption === option ? "bg-slate-300" : ""
          }`}
        >
          {option}
        </p>
      ))}
      <div className="flex">
        {index > 0 && (
          <button
            className="btn-grad mt-4  w-24"
            onClick={() => setIndex((prev) => prev - 1)}
          >
            Back
          </button>
        )}
        {index === questions.length - 1 ? (
          <button className="btn-grad mt-4 ml-auto w-24" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="btn-grad mt-4 ml-auto w-24" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizDetail;
