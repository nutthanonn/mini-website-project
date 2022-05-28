import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react";
import { GlobalStateImpl } from "../store/globolState";
const MinimalNumber = dynamic(() => import("../Components/MinimalNumber"), {
  ssr: false,
});

interface BoxNumberProps {
  amountNumber: number;
  width?: number;
  heigh?: number;
  circleSize?: number;
  store: GlobalStateImpl;
}

// เขียน function ใน store แล้วดึงมาใช้ใน components นี้

const BoxNumber: React.FC<BoxNumberProps> = observer((props) => {
  const { amountNumber, width, heigh, circleSize, store } = props;
  const [items, setItems] = useState<string[][]>(
    Array.from({ length: amountNumber }, () => [])
  );

  useEffect(() => {
    const a = store.convert_number_to_stringId("");
    setItems(a);
  }, []);

  return (
    <div>
      <div className="flex h-[217.53px] w-[899.12px] flex-col rounded-2xl bg-[#000000]">
        <div id="circle-group" className="flex flex-row space-x-2 p-3">
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
        <div className="flex flex-row space-x-10 justify-center">
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
});

export default BoxNumber;
