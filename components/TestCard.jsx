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
    <div className='prompt_card'  onClick={()=>handleCardClick & handleCardClick(stepAux)}>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
        >
         

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {stepAux.title}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {stepAux.questiondhrase}
            </p>
          </div>
        </div>

      </div>
      {stepAux.title}
      <p className='my-4 font-satoshi text-sm text-gray-700'>{stepAux.questionphrase}</p>

    </div>
    
  );
};

export default TestCard;
