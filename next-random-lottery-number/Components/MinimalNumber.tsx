import React, { useEffect } from "react";

interface MinimalNumberProps {
  ChangeColor: string[];
  currTarget: string;
}

const allNumber: string[] = [
  "first-x-line",
  "mid-x-line",
  "on-first-y-line",
  "on-last-y-line",
  "under-first-y-line",
  "under-last-y-line",
  "last-x-line",
];

const MinimalNumber: React.FC<MinimalNumberProps> = (props) => {
  const { ChangeColor, currTarget } = props;

  //เกิด bug เพราะหลาย element มี id ที่ซำ้กัน

  useEffect(() => {
    allNumber.map((e) => {
      const eleId = document.getElementById(`${e}${currTarget}`);

      eleId?.classList.remove("bg-[#24FF00]");
      eleId?.classList.remove("bg-[#1E1E1E]");

      ChangeColor.includes(e)
        ? eleId?.classList.add("bg-[#24FF00]")
        : eleId?.classList.add("bg-[#1E1E1E]");
    });
  }, []);

  return (
    <div className="m-2 flex h-max w-max flex-col">
      <div className="flex space-x-1" id="first-box">
        <div
          className="mt-2 h-[60.42px] w-[6.04px] rounded-lg bg-[#1E1E1E]"
          id={`on-first-y-line${currTarget}`}
        ></div>
        <div
          className="h-[7.25px] w-[48.34px] rounded-lg bg-[#1E1E1E]"
          id={`first-x-line${currTarget}`}
        ></div>
        <div
          className="mt-2 h-[60.42px] w-[6.04px] rounded-lg bg-[#1E1E1E]"
          id={`on-last-y-line${currTarget}`}
        ></div>
      </div>
      <div className="mx-2" id="mid-box">
        <div
          className="h-[7.25px] w-[48.34px] rounded-lg bg-[#1E1E1E]"
          id={`mid-x-line${currTarget}`}
        ></div>
      </div>
      <div className="flex items-end" id="sec-box">
        <div
          className="mb-2 h-[60.42px] w-[6.04px] rounded-lg bg-[#1E1E1E]"
          id={`under-first-y-line${currTarget}`}
        ></div>
        <div
          className="mx-1 h-[7.25px] w-[48.34px] rounded-lg bg-[#1E1E1E]"
          id={`last-x-line${currTarget}`}
        ></div>
        <div
          className="mb-2 h-[60.42px] w-[6.04px] rounded-lg bg-[#1E1E1E]"
          id={`under-last-y-line${currTarget}`}
        ></div>
      </div>
    </div>
  );
};

export default MinimalNumber;
