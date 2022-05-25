import React from "react";
import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import SixNumber from "../Components/sixNumber";
import ThreeNumber from "../Components/threeNumber";
import TwoNumber from "../Components/twoNumber";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  function random_number(range: number): string {
    return Math.floor(Math.random() * 10 ** range)
      .toString()
      .padStart(range, "0");
  }

  return (
    <div className="min-h-screen bg-[#F4BCBC]">
      <Navbar />
      <div className="flex items-center border-2 min-h-screen justify-center flex-col space-y-4">
        <SixNumber />
        <div className="flex flex-row space-x-6">
          <ThreeNumber />
          <ThreeNumber />
        </div>
        <TwoNumber />
        <Button>Generate</Button>
      </div>
    </div>
  );
};

export default Home;
