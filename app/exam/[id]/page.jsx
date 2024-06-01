"use client";
import { useEffect, useState } from "react";
import Question from "../../../components/Question";

const TestQuestions = ({ params, searchParams }) => {
  const testId = params.id;
  const [test, setTest] = useState({});
  const [questions, setQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const handleNextButtonClick = () => {
    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  };

  const handlePreviousButtonClick = () => {
    const nextIndex =
      currentQuestionIndex === 0 ? questions.length - 1 : currentQuestionIndex - 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tests/${testId}`);
      const data = await response.json();
      setTest(data);
      setQuestions(data.test_question.filter((e) => e.question != null).map((e)=>e.question));
      console.log(data.test_question.filter((e) => e.question != null).map((e)=>e.question)[currentQuestionIndex])
      setCurrentQuestion(data.test_question.filter((e) => e.question != null).map((e)=>e.question)[currentQuestionIndex]);
    };

    fetchPosts();
  }, []);
  return (
    <>
      {currentQuestion && (
        <Question key={currentQuestion.id} index={currentQuestionIndex} question={currentQuestion}  />
      )}
      <div className="navigation">
        <button
          disabled={currentQuestionIndex === 0}
          onClick={handlePreviousButtonClick}
        >
          Previous |
        </button>
        <button
          disabled={currentQuestionIndex === questions.length - 1}
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TestQuestions;
