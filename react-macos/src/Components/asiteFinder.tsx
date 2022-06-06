import React, { useState } from "react";
import AsiteAccordion from "./asiteAccordion";
import { TypeFinder } from "../data/typeFinderData";

const AsiteFinder: React.FC = () => {
  return (
    <div className="h-[100%] w-[15%] bg-[#2B2344] opacity-90">
      <div id="btn-top" className="p-3">
        <div className="flex space-x-2 w-fit">
          <div
            id="circle-red"
            className="rounded-full w-[15px] h-[15px] bg-[#FF0000]"
          ></div>
          <div
            id="circle-yellow"
            className="rounded-full w-[15px] h-[15px] bg-[#FFE600]"
          ></div>
          <div
            id="circle-green"
            className="rounded-full w-[15px] h-[15px] bg-[#14FF00]"
          ></div>
        </div>
      </div>
      <div className="overflow-scroll h-[100%]">
        {TypeFinder.map((items, index) => {
          return <AsiteAccordion key={index} {...items} />;
        })}
      </div>
    </div>
  );
};

export default AsiteFinder;
