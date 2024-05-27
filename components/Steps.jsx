"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TestCard from "./TestCard";

const TestCardList = ({ data, handleCardClick }) => {

  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <TestCard key={post.id} post={post} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

const Steps = () => {
  const [allPosts, setAllPosts] = useState([]);
  const router = useRouter();

  const handleCardClickV2 = async (test) => {
    router.push(`/tests/${test.t_id}`);
  };
  const fetchPost = async () => {
    const response = await fetch("/api/steps", { cache: "no-store" });
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {allPosts.map((step) => (
        <section className="feed" key={step.id}>
          <strong>{step.shorttitle}</strong>
          <TestCardList
            key={step.id}
            data={step.tests.sort((a, b) => {
              if (a.orderindex < b.orderindex) return -1;
              else if (a.orderindex > b.orderindex) return 1;
              return 0;
            })}
            handleCardClick={handleCardClickV2}
          />
        </section>
      ))}
    </>
  );
};

export default Steps;
