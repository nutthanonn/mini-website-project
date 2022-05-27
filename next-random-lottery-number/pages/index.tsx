import React, { useState } from "react";
import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import Button from "@mui/material/Button";
import BoxNumber from "../Components/BoxNumber";

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
      <BoxNumber />
    </div>
  );
};

export default Home;
