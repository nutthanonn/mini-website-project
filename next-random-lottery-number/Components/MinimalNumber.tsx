import React from "react";

interface MinimalNumberProps {
  ChangeColor: string[];
}

const MinimalNumber: React.FC<MinimalNumberProps> = (props) => {
  const { ChangeColor } = props;

  return (
    <div id="random-number" className="m-2 flex h-max w-max flex-col">
      <div className="flex space-x-1" id="first-box">
        <div
          className="mt-2 h-[60.42px] w-[6.04px] rounded-lg bg-white"
          id="first-y"
        ></div>
        <div
          className="h-[7.25px] w-[48.34px] rounded-lg bg-white"
          id="first-x"
        ></div>
        <div
          className="mt-2 h-[60.42px] w-[6.04px] rounded-lg bg-white"
          id="second-y"
        ></div>
      </div>
      <div className="mx-2">
        <div
          className="h-[7.25px] w-[48.34px] rounded-lg bg-white"
          id="first-x"
        ></div>
      </div>
      <div className="flex items-end" id="sec-box">
        <div
          className="mb-2 h-[60.42px] w-[6.04px] rounded-lg bg-white"
          id="second-y"
        ></div>
        <div
          className="mx-1 h-[7.25px] w-[48.34px] rounded-lg bg-white"
          id="first-x"
        ></div>
        <div
          className="mb-2 h-[60.42px] w-[6.04px] rounded-lg bg-white"
          id="second-y"
        ></div>
      </div>
    </div>
  );
};

export default MinimalNumber;
