"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const TestCardV2 = ({ testAux, handleCardClick}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  console.log(testAux)
  
  return (
    <div className='prompt_card'  >
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
        >
         

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {testAux.test_name && testAux.test_name[0].test_names?.title}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {testAux.questionphrase}
            </p>
          </div>
        </div>

      </div>
      {testAux.title}
      <p className='my-4 font-satoshi text-sm text-gray-700'>{testAux.fulldescription}</p>

    </div>
    
  );
};

export default TestCardV2;
