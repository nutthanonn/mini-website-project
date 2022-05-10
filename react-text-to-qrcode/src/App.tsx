import React, { useState } from "react";
import QRCode from "react-qr-code";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-mono">Generate QRCode</h1>
      <div className="bg-white p-5">
        <QRCode value={value.length > 3 ? value : ""} />
      </div>
      <input
        type="text"
        className={`${
          value.length > 20 ? "w-3/6" : ""
        } w-25 rounded-xl border-2 px-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none`}
        placeholder="Enter at least 3 char"
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
