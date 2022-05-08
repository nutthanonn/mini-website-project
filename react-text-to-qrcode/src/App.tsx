import React, { useState } from "react";
import QRCode from "react-qr-code";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const val: string = event.target.value;
    const element: EventTarget & HTMLInputElement = event.currentTarget;
    if (val.length > 3) {
      setValue(event.target.value);
    }

    if (val.length > 20) {
      element.classList.add("w-3/6");
    } else {
      element.classList.remove("w-3/6");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-mono">Generate QRCode</h1>
      <div className="bg-white p-5">
        <QRCode value={value} />
      </div>
      <input
        type="text"
        className="w-25 rounded-xl border-2 px-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
        placeholder="Enter at least 3 char"
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
