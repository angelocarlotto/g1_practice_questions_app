"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [allSteps, setAllPosts] = useState([]);
  const router = useRouter();

  const handleCardClickV2 = async (test) => {
    router.push(`/tests/${test.id}`);
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
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        G1
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Practice Exam</span>
      </h1>
      <p className="desc text-center">
        100% free plataform to practice your knowlege before the real G1 exame.
      </p>

      <>
        {allSteps.map((step) => (
          <section className="feed" key={step.id}>
            <strong>{step.title}</strong>

            <div>
              {step.tests
                .sort((a, b) => {
                  if (a.orderindex < b.orderindex) return -1;
                  else if (a.orderindex > b.orderindex) return 1;
                  return 0;
                })
                .map((test) => (
                  <div
                    className="prompt_card"
                    onClick={() => handleCardClickV2(test)}
                  >
                    <div>
                      <h3>{test.title}</h3>
                    </div>
                    <p>{test.questionphrase}</p>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </>
    </section>
  );
};

export default Home;
