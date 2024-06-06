"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from 'next/image'




const UpdatePrompt = ({ params, searchParams }) => {
  const router = useRouter();
  const promptId = params.id; //searchParams.get("id");

  const [test, setPost] = useState({});
  const [isExpanded, setIsExpanded] = useState(false)

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
      <div className="flex prompt_card flex-col gap-3 w-[90%] mx-auto my-3">
        <div clasName='flex flex-col'>
        <h1 className="text-5xl font-bold">{test.title}</h1>
          

            {/* <h3>{test.test_name && test.title} ----</h3> */}
          <p className="text-slate-600">"City Placeholder" &bull; {test.questionphrase} &bull; "Percentageplaceholder"</p>
          
          </div>
        <div>
          
        </div>
        <div className='relative w-full h-[350px]'>
          <Image src={
                          "/assets/images/images/" +
                          test?.cover?.replace(".png", "_Normal.png").replace(".jpg", "_Normal.png")
                        }
            fill className='object-cover rounded-md' />
        </div>
        <h2 className='text-3xl font-bold'>About</h2>
        <div className='rounded-md p-4 gap-4 flex flex-col shadow-md'>
          <p>Description</p>
          {isExpanded ? <p>{test?.fulldescription}</p> : <p>{test?.fulldescription?.split(' ').slice(0, 50).join(' ').concat('...')}</p>}
          <button className='text-right text-blue-600' onClick={() => setIsExpanded(cur => !cur)}>{isExpanded ? 'Read less' : 'Read more...'}</button>
        </div>
        
      <button className='text-white bg-blue-600 w-full rounded-md py-2' onClick={() => handleStartClick(test)}>Start Exam</button>
      </div>
    
  );
};

export default UpdatePrompt;
