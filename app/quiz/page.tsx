"use client";
import { Heading, Select } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/navbar";

const Quiz = () => {
  const [quizList, setQuizList] = useState();
  return (
    <>
      <Navbar />
      <div className=" px-8 py-14 bg-gray-100 mx-6 mt-20 rounded-lg  lg:w-1/2 lg:mx-auto">
        <Heading as="h1" size="xl" noOfLines={1}>
          Select Quiz
        </Heading>
        <br />
        <Select placeholder="Select option" className=" bg-white">
          <option value="option1">Python</option>
          <option value="option2">DBMS</option>
          <option value="option3">Software Engineering</option>
        </Select>
        <button className="btn-grad mt-5">Start Quiz</button>
      </div>
    </>
  );
};

export default Quiz;
