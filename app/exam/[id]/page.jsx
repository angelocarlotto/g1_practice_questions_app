"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const TestQuestions = ({ params, searchParams }) => {
  const testId = params.id;
  const [test, setTest] = useState({});

  const handleRadioClick = (e, answer, question) => {
    
    if(answer.a_id==question.correctanswer){
      e.target.after("Right")
    }else{
      e.target.after("Wrong")
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tests/${testId}`);
      const data = await response.json();
      setTest(data);
    };

    fetchPosts();
  }, []);


  return (
    <div className='my-3 flex flex-col gap-[3rem]'>
      {test.test_question
        ?.filter((e) => e.question != null)
        .map((element) => {
          const question = element.question;
          const answers = question.question_answer;
          return (
            <div className="prompt_card w-[90%] mx-auto flex flex-col gap-2">
                {question.imagename && <div className='relative w-full h-[200px]'>
                  
                 
                  <Image
                    key={"image" + question.id}
                    src={
                      "/assets/images/images/" +
                      question.imagename
                        .replace(".png", "_Normal.png")
                        .replace(".jpg", "_Normal.png")
                    }
                    fill
                    className='object-cover rounded-md'
                    alt="image"
                  />
                </div>
                }
              <div>
                <p>{question.description}</p>
                <ol>
                  {answers?.map((ans) => (
                    <li>
                      <input
                        type="radio"
                        name={"question" + question.id}
                        onClick={(e) => {
                          handleRadioClick( e,ans, question);
                        }}
                        id={"answer" + question.id + ans.answer.id}
                        value={ans.answer.id}
                      />{" "}
                      <label for={"answer" + question.id + ans.answer.id}>
                        {" "}
                        {ans.answer.text}
                      </label>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TestQuestions;
