"use client";
import { useEffect, useState } from "react";
import Question from "@components/Question";

const TestQuestions = ({ params, searchParams }) => {
  const testId = params.id;
  const [test, setTest] = useState({});
  const [questions, setQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);

  const handleNextButtonClick = () => {
    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  };

  const handlePreviousButtonClick = () => {
    const nextIndex =
      currentQuestionIndex === 0
        ? questions.length - 1
        : currentQuestionIndex - 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  };

  const handleRadioClick = (e, answer, question) => {
    if (answer.a_id == question.correctanswer) {
      e.target.after("Right");
      setTotalHits(totalHits+1);
    } else {
      e.target.after("Wrong");
      setTotalErrors(totalErrors+1);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tests/${testId}`);
      const data = await response.json();
      setTest(data);
      const qst = data.test_question
        .filter((e) => e.question != null)
        .map((e) => e.question);
      setQuestions(qst);
      setCurrentQuestion(qst[currentQuestionIndex]);

      setTotalQuestions( qst.length);

    };

    fetchPosts();
  }, []);
  return (
    <>
      <p>
        Erros:{Math.round( (totalErrors/totalQuestions)*100,2)}% Hits:{Math.round((totalHits/totalQuestions)*100,2)}% Progress:{Math.round(((totalHits+totalErrors)/totalQuestions)*100,2)}%
      </p>
      {currentQuestion && (
        <Question
          key={currentQuestion.id}
          index={currentQuestionIndex}
          question={currentQuestion}
          exam={test}
          handleRadioClick={handleRadioClick}
        />
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
