import React from "react";
import MinimalNumber from "./MinimalNumber";

interface BoxNumberProps {
  amountNumber?: number;
  width?: number;
  heigh?: number;
  circleSize?: number;
}

const BoxNumber: React.FC<BoxNumberProps> = (props) => {
  const { amountNumber, width, heigh, circleSize } = props;

  const items: number[] = Array.from(Array(amountNumber).keys());

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
        <div className="flex">
          {items.map((e, index) => {
            return <MinimalNumber key={index} ChangeColor={[]} />;
            // ChangeColor={}  -> do something
            // ตรงนี้ต้องส่ง array ที่บอกว่า element นี้ให้เปลี่ยนสี โดยอาจจะต้องใช้ js คุมผ่าน id ของ element
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxNumber;
