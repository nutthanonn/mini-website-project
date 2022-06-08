import React from "react";
import useSound from "use-sound";
import sound from "../assets/switch-1.mp3";

interface SwitchProps {
  width?: number;
  height?: number;
  background?: string;
  light: boolean;
  changeMode: () => void;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { light, changeMode } = props;
  const [play] = useSound(sound);

  return (
    <div>
      <label className={`relative inline-block w-[120px] h-[34px] }`}>
        <input
          type="checkbox"
          onChange={changeMode}
          onClick={() => play()}
          className="h-0 w-0 opacity-0"
        />
        <span
          className={`absolute rounded-2xl top-0 left-0 right-0 bottom-0  
          before:w-[30px] before:h-[30px] before:rounded-full before:absolute 
          before:bg-white before:left-[2px] before:top-[2px]  ${
            light
              ? "before:translate-x-[calc(120px-115%)] bg-[#FFC600] before:content-sun"
              : "bg-[#000000] before:content-moon"
          } before:ease-linear before:duration-200 cursor-pointer`}
        />
      </label>
    </div>
  );
};

export default Switch;
