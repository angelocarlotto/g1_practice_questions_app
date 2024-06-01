"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Test = ({test}) => {
  const router = useRouter();
  const handleCardClickV2 = async (test) => {
    router.push(`/tests/${test.id}`);
  };
  return (
    <>
      <div className="prompt_card" onClick={() => handleCardClickV2(test)}>
        <div>
          <h3>{test.title}</h3>
          <Image
            src={
              "/assets/images/images/" +
              test.cover
                .replace(".png", "_Normal.png")
                .replace(".jpg", "_Normal.png")
            }
            width="400"
            height="200"
            alt="something here"
          ></Image>
        </div>
        <p>{test.questionphrase}</p>
      </div>
    </>
  );
};

export default Test;
