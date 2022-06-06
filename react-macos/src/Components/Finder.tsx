import React from "react";
import AsiteFinder from "./asiteFinder";
import Draggable from "react-draggable";
import BodyFinder from "./bodyFinder";

const Finder: React.FC = () => {
  return (
    <div>
      <Draggable>
        <div className="w-4/6 h-96 rounded-xl overflow-hidden border-2 flex flex-row">
          <AsiteFinder />
          <BodyFinder />
        </div>
      </Draggable>
    </div>
  );
};

export default Finder;
