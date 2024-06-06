import Card from "./Card";
import Link from 'next/link'

const Steps = ({allSteps}) => {
  return (
  <>
    {allSteps.map((step) => (
          <section key={step.id} className="flex items-center justify-between flex-col">
            <div className='flex justify-between w-full items-center  h-fit'>
            <div className="flex gap-4 items-end">
              <h2 className="text-2xl font-bold text-center ">{step.title}</h2>
              <span className="bg-slate-200 px-4 rounded-full font-bold">{step.titlepart1}</span>
              </div>
          <div>
            <button href='#' className=" text-blue-500  font-bold ">See All</button>
              </div>
            </div>
            <div className="flex gap-4  w-full flex-wrap">
              {step.tests
                .sort((a, b) => {
                  if (a.orderindex < b.orderindex) return -1;
                  else if (a.orderindex > b.orderindex) return 1;
                  return 0;
                })
                .map((test) => (
                  <Card test={test} key={test.title } className='my-4'/>
                ))}
            </div>
          </section>
    ))}
      </>
      )
      
}

export default Steps