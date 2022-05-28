import React from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
const MinimalNumber = dynamic(() => import("../Components/MinimalNumber"), {
  ssr: false,
});

interface BoxNumberProps {
  amountNumber?: number;
  width?: number;
  heigh?: number;
  circleSize?: number;
}

const BoxNumber: React.FC<BoxNumberProps> = (props) => {
  const { amountNumber, width, heigh, circleSize } = props;

  // const items: number[] = Array.from(Array(3).keys());
  const items: string[][] = [
    ["on-last-y-line", "under-last-y-line"],
    [
      "first-x-line",
      "on-first-y-line",
      "on-last-y-line",
      "under-first-y-line",
      "under-last-y-line",
      "last-x-line",
    ],
  ];

  return (
    <div>
      <div className="flex h-[217.53px] w-[899.12px] flex-col rounded-2xl bg-[#000000]">
        <div id="circle-group" className="flex flex-row space-x-2 border-2 p-3">
          <div
            id="circle"
            className="h-[17px] w-[17px] rounded-full bg-[#FF0000]"
          ></div>
          <div
            id="circle"
            className="h-[17px] w-[17px] rounded-full bg-[#FFE600]"
          ></div>
          <div
            id="circle"
            className="h-[17px] w-[17px] rounded-full bg-[#14FF00]"
          ></div>
        </div>
        {/* MinimalNumber */}
        <div className="flex flex-row space-y-2 border-2">
          {items.map((e, index) => {
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
