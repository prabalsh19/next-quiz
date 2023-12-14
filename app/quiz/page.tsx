import { Heading, Select } from "@chakra-ui/react";
import Navbar from "../components/navbar";

async function getData() {
  const res = await fetch("http://localhost:3000/api/quiz", {
    cache: "force-cache",
  });
  return res.json();
}

const Quiz = async () => {
  const quizData = await getData();

  return (
    <>
      <Navbar />
      <div className=" px-8 py-14 bg-gray-100 mx-6 mt-20 rounded-lg  lg:w-1/2 lg:mx-auto">
        <Heading as="h1" size="xl" noOfLines={1}>
          Select Quiz
        </Heading>
        <br />
        <Select placeholder="Select option" className=" bg-white">
          {quizData.quizes.map((quiz: QuizQuestion) => (
            <option key={quiz.id} value="option1">
              {quiz.quizName}
            </option>
          ))}
        </Select>
        <button className="btn-grad mt-5">Start Quiz</button>
      </div>
    </>
  );
};

export default Quiz;
