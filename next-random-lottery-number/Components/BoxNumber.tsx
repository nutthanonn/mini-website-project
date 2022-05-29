import React, { useState } from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
const MinimalNumber = dynamic(() => import("../Components/MinimalNumber"), {
  ssr: false,
});

interface BoxNumberProps {
  randomNumber: string[][];
  amountNumber: number;
  width: string;
  heigh: string;
  circleSize: number;
}

// เขียน function ใน store แล้วดึงมาใช้ใน components นี้

const BoxNumber: React.FC<BoxNumberProps> = (props) => {
  const { amountNumber, width, heigh, randomNumber } = props;

  // Array.from({ length: amountNumber }, () => [])

  return (
    <div>
      <div
        className={`flex flex-col rounded-2xl bg-[#000000] ${width} ${heigh}`}
      >
        <div className="flex flex-row space-x-2 p-3">
          <div className={`h-[17px] w-[17px] bg-[#FF0000] rounded-full`}></div>
          <div className={`h-[17px] w-[17px] bg-[#FFE600] rounded-full`}></div>
          <div className={`h-[17px] w-[17px] bg-[#14FF00] rounded-full`}></div>
        </div>
        {/* MinimalNumber */}
        <div className="flex flex-row space-x-5 justify-center h-[100%] items-center">
          {randomNumber.map((e, index) => {
            return (
              <MinimalNumber
                ChangeColor={e}
                key={index}
                currTarget={uuidv4()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxNumber;
