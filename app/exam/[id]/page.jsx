"use client";
import { useEffect, useState } from "react";
import Question from "@components/Question";
const TestQuestions = ({ params, searchParams }) => {
  const testId = params.id;
  const [test, setTest] = useState({});
  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const [questionsAnswered, setQuestionsAnswered] = useState({});

  const handleNextButtonClick = () => {
    const nextIndex = questions.indexOf(currentQuestion) + 1;
    setCurrentQuestion(questions[nextIndex]);
    setNextButtonDisabled(questionsAnswered[questions[nextIndex].id] == null);
  };

  const handlePreviousButtonClick = () => {
    const previousIndex = questions.indexOf(currentQuestion) - 1;
    setCurrentQuestion(questions[previousIndex]);
    setNextButtonDisabled(false);
  };

  const handleRadioClick = (e, answer, question) => {
    if (e.target.checked) {
      questionsAnswered[question.id] = {
        result: answer.a_id == question.correctanswerjson,
        selectedAnswerId: answer.a_id,
        countAnswerNeeded:question.correctanswerjson.length
      };
    } else {
      delete questionsAnswered[question.id];
    }
    console.log(questionsAnswered);
    setQuestionsAnswered(questionsAnswered);
    setNextButtonDisabled(false);
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
      setCurrentQuestion(qst[2]);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <p>
        Erros:{" "}
        {Math.round(
          (Object.getOwnPropertyNames(questionsAnswered).filter(
            (x) => questionsAnswered[x].result == false
          ).length /
            questions.length) *
            100,
          2
        )}
        % Hits:
        {Math.round(
          (Object.getOwnPropertyNames(questionsAnswered).filter(
            (x) => questionsAnswered[x].result == true
          ).length /
            questions.length) *
            100,
          2
        )}
        % Progress:
        {Math.round(
          (Object.getOwnPropertyNames(questionsAnswered).length /
            questions.length) *
            100,
          2
        )}
        %
      </p>
      {currentQuestion && (
        <Question
          key={currentQuestion.id}
          index={questions.indexOf(currentQuestion)}
          question={currentQuestion}
          exam={test}
          handleRadioClick={handleRadioClick}
          isDisabled={
            currentQuestion?.correctanswerjson?.length == 1 &&
            questionsAnswered[currentQuestion.id] != null
          }
          selectedAnswerId={
            questionsAnswered[currentQuestion.id] == null
              ? null
              : questionsAnswered[currentQuestion.id].selectedAnswerId
          }
        />
      )}
      <div className="navigation">
        <button
          disabled={questions.indexOf(currentQuestion) === 0}
          onClick={handlePreviousButtonClick}
        >
          Previous |
        </button>
        <button
          disabled={
            nextButtonDisabled ||
            questions.indexOf(currentQuestion) === questions.length - 1
          }
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TestQuestions;
