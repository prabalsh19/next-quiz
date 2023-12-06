"use client";
import { questions } from "@/app/utils/constant";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";

const QuizDetail = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const currentQuestion: QuizQuestion = questions[index];

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
          <button className="btn-grad mt-4 ml-auto w-24">Submit</button>
        ) : (
          <button
            className="btn-grad mt-4 ml-auto w-24"
            onClick={() => setIndex((prev) => prev + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizDetail;
