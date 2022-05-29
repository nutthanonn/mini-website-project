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
  console.log(ChangeColor);

  const classElementVertical = `h-[100%] w-[10%] rounded-lg bg-[#1E1E1E]`;
  const classElementHorizontal = `h-[15%] w-[100%] rounded-lg bg-[#1E1E1E]`;

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
  }, [ChangeColor]);

  return (
    <div className="m-2 flex flex-col h-[90%] w-[10%]">
      <div className="flex space-x-1 h-[40%] w-[100%]" id="first-box">
        <div
          className={`mt-2 ${classElementVertical}`}
          id={`on-first-y-line${currTarget}`}
        ></div>
        <div
          className={classElementHorizontal}
          id={`first-x-line${currTarget}`}
        ></div>
        <div
          className={`mt-2 ${classElementVertical}`}
          id={`on-last-y-line${currTarget}`}
        ></div>
      </div>
      <div
        className="w-[100%] h-[20%] flex justifly-center items-center px-1"
        id="mid-box"
      >
        <div
          className="h-[20%] w-[100%] rounded-lg bg-[#1E1E1E]"
          id={`mid-x-line${currTarget}`}
        ></div>
      </div>
      <div className="flex items-end h-[40%] w-[100%] mb-2" id="sec-box">
        <div
          className={`mb-2 ${classElementVertical}`}
          id={`under-first-y-line${currTarget}`}
        ></div>
        <div
          className={`mx-1 ${classElementHorizontal}`}
          id={`last-x-line${currTarget}`}
        ></div>
        <div
          className={`mb-2 ${classElementVertical}`}
          id={`under-last-y-line${currTarget}`}
        ></div>
      </div>
    </div>
  );
};

export default MinimalNumber;
