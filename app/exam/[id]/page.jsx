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
      setTest(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {test.test_question?.filter(e=>e.question!=null).map((element) => {
        const question = element.question;
        const answers = question.question_answer;
        return (
          <div className="prompt_card">
            <div>
              {question.imagename && (
                <Image
                key={"image"+question.id+ans.answer.id}
                  src={"/assets/images/images/" + question.imagename.replace(".png", "_Normal.png").replace(".jpg","_Normal.png") }
                  width="400"
                  height="200"
                  alt="image"
                ></Image>
              )}
              <p>{question.description}</p>
              <br/>
              <ol>
                {answers?.map((ans) => (
                  <li><input type="radio" name={"question"+question.id} id={"answer"+question.id+ans.answer.id} value={ans.answer.id}/> <label for={"answer"+question.id+ans.answer.id}> {ans.answer.text}</label></li>
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
