"use client"

import { useRouter } from "next/navigation";
import Image from "next/image"

const Card = ({test, className=''}) => {
    const router = useRouter()
    const handleCardClickV2 = async (test) => {
    router.push(`/tests/${test.id}`);
  };
  return (
    <div
                    className={`w-[250px] h-[300px] flex flex-col gap-1 ${className}`}
                    onClick={() => handleCardClickV2(test)}
                  >
                    <div>
                      
                      
        <div className="relative w-[250px] h-[250px] ">
          {/*TODO: write the image as component  */}
          <Image
                        src={
                          "/assets/images/images/" +
                          test.cover.replace(".png", "_Normal.png").replace(".jpg", "_Normal.png")
                        }
          fill
          className="object-cover rounded-md"
                      />
          </div>
                    </div>
                    <h3>{test.title}</h3>
                    <p className="text-slate-600">{test.questionphrase}</p>
                  </div>
  )
}

export default Card