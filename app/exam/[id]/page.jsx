"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const TestQuestions = ({ params, searchParams }) => {
  const testId = params.id;
  const [test, setTest] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tests/${testId}`);
      const data = await response.json();
      console.log(data);
      setTest(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {test.test_question?.map((element) => {
        const question = element.question;
        const answers = question.question_answer;
        return (
          <div className="prompt_card">
            <div>
              {question.imagename && (
                <Image
                  src={"/assets/images/images/" + question.imagename.replace(".jpg","_Normal.png") }
                  width="400"
                  height="200"
                ></Image>
              )}
              <p>{question.description}</p>
              <br/>
              <ol>
                {answers?.map((ans) => (
                  <li><input type="radio" name={"question"+question.id} id={"answer"+ans.answer.id} value={ans.answer.id}/> <label for={"answer"+ans.answer.id}> {ans.answer.text}</label></li>
                ))}
              </ol>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TestQuestions;
