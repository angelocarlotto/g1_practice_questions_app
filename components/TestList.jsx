import Image from "next/image";

import Steps from "./Steps";

const TestList = ({allSteps}) => {
  return (
    <div className="flex flex-col">
      <h1 className="head_text text-center">
        G1
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Practice Exam</span>
      </h1>
      <p className="desc text-center">
        100% free plataform to practice your knowlege before the real G1 exame.
      </p>
      <Steps allSteps={allSteps} />
    </div>
  )
}

export default TestList