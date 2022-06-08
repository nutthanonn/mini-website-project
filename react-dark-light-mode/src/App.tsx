import React, { useState } from "react";
import Switch from "./components/switch";

const App: React.FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  function handleChange() {
    setIsCheck(!isCheck);
  }

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        isCheck ? "bg-amber-200" : "bg-slate-700"
      }`}
    >
      <Switch light={isCheck} changeMode={handleChange} />
    </div>
  );
};

export default App;
