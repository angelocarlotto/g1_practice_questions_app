"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgSmileSad, CgSmile } from "react-icons/cg";
const Question = ({
  index,
  question,
  exam,
  handleRadioClick,
  isDisabled = false,
  selectedAnswerId = null,
}) => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    setAnswers(question.question_answer);
    console.log(exam);
  }, []);
  return (
    <div className="prompt_card">
      <div>
        {question.imagename && (
          <Image
            key={"image" + question.id}
            src={
              "/assets/images/images/" +
              question.imagename
                .replace(".png", "_Normal.png")
                .replace(".jpg", "_Normal.png")
            }
            width="400"
            height="200"
            alt="something here"
          ></Image>
        )}
        <p>
          {index + 1}/{exam?.test_question?.length} -{" "}
          <strong> {question.description}</strong>
        </p>
        <br />
        <ol>
          {answers?.map((ans) => (
            <li key={"li" + question.id + ans.answer.id}>
              <input
                disabled={isDisabled}
                defaultChecked={selectedAnswerId == ans.answer.id}
                type="radio"
                name={"question" + question.id}
                onClick={(e) => {
                  handleRadioClick(e, ans, question);
                }}
                id={"answer" + question.id + ans.answer.id}
                value={ans.answer.id}
              />{" "}
              <label htmlFor={"answer" + question.id + ans.answer.id}>


                {ans.answer.text}
              </label>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Question;
