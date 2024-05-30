"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";



const UpdatePrompt = ({ params, searchParams }) => {
  const router = useRouter();
  const promptId = params.id; //searchParams.get("id");

  const [test, setPost] = useState({});

  const handleStartClick = (e) => {
    console.log(e);
    router.push(`/exam/${e.id}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tests/${params?.id}`);
      const data = await response.json();

      setPost(data);
    };

    if (params?.id) fetchPosts();
  }, [promptId]);

  return (
    <>
      <div className="prompt_card">
        <div>
          <h3>{test.test_name && test.title}</h3>
          <p>{test.questionphrase}</p>
        </div>
        {test.title}
        <p>{test.fulldescription}</p>
      </div>
      <button onClick={() => handleStartClick(test)}>Start Exam</button>
    </>
  );
};

export default UpdatePrompt;
