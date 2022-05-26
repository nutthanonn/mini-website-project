import React, { useState } from "react";
import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import SixNumber from "../Components/sixNumber";
import ThreeNumber from "../Components/threeNumber";
import TwoNumber from "../Components/twoNumber";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  const [sixDigit, setSixDigit] = useState<string>("0");
  const [firstThreeDigit, setFirstThreeDigit] = useState<string>("0");
  const [secThreeDigit, setSecThreeDigit] = useState<string>("0");
  const [twoDigit, setTwoDigit] = useState<string>("0");

  function random_number(range: number): string {
    return Math.floor(Math.random() * 10 ** range)
      .toString()
      .padStart(range, "0");
  }

  function handleClick() {
    setSixDigit(random_number(6));
    setFirstThreeDigit(random_number(3));
    setSecThreeDigit(random_number(3));
    setTwoDigit(random_number(2));
  }

  return (
    <div className="min-h-screen bg-[#F4BCBC]">
      <Navbar />
      <div className="flex items-center border-2 min-h-screen justify-center flex-col space-y-4">
        <SixNumber random_number={sixDigit} />
        <div className="flex flex-row space-x-6">
          <ThreeNumber />
          <ThreeNumber />
        </div>
        <TwoNumber />
        <Button onClick={handleClick}>Generate</Button>
      </div>
    </div>
  );
};

export default Home;
