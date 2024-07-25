import React from "react";
import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.png";
import { checklistItems } from "../miniComponents";

const Workflow = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Coding Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          <img src={code} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
