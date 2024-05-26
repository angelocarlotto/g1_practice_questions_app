"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const TestCard = ({ post: stepAux, handleCardClick, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();


  return (
    <div className='prompt_card'  onClick={()=>handleCardClick & handleCardClick(stepAux.test_name[0])}>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
        >
         

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {stepAux.test_name[0].test_names.title}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {stepAux.questionPhrase}
            </p>
          </div>
        </div>

      </div>
      {stepAux.test_name[0].test_names.title}
      <p className='my-4 font-satoshi text-sm text-gray-700'>{stepAux.questionPhrase}</p>

    </div>
    
  );
};

export default TestCard;
