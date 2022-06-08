import React, { useState } from "react";
import Switch from "./components/switch";
import Lottie from "react-lottie";
import animationSun from "./assets/sunclouds.json";
import animationMoon from "./assets/clear-night-moon.json";

const sunOptions = {
  loop: true,
  autoplay: true,
  animationData: animationSun,
};

const moonOptions = {
  loop: true,
  autoplay: true,
  animationData: animationMoon,
};

const App: React.FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  function handleChange() {
    setIsCheck(!isCheck);
  }

  return (
    <div
      className={`min-h-screen flex justify-center items-center flex-col ${
        isCheck ? "bg-amber-200" : "bg-slate-700"
      }`}
    >
      <div id="txt">
        <p className="font-mono">{isCheck ? "Day" : "Night"}</p>
      </div>
      <Switch light={isCheck} changeMode={handleChange} />
      {isCheck ? (
        <div className="absolute top-0 right-10 animate-sunBounce">
          <Lottie options={sunOptions} isClickToPauseDisabled={true} />
        </div>
      ) : (
        <div className="absolute top-0 right-0 animate-moonBounce">
          <Lottie options={moonOptions} isClickToPauseDisabled={true} />
        </div>
      )}
    </div>
  );
};

export default App;
