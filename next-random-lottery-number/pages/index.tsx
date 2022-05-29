import React, { useState } from "react";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import BoxNumber from "../Components/BoxNumber";
import { convert_number_to_stringId } from "../store/globolFunction";

const Home: NextPage = () => {
  const [sixDigit, setSixDigit] = useState<string[][]>(
    Array.from({ length: 6 }, () => [])
  );
  const [firstThreeDigit, setFirstThreeDigit] = useState<string[][]>(
    Array.from({ length: 3 }, () => [])
  );
  const [secThreeDigit, setSecThreeDigit] = useState<string[][]>(
    Array.from({ length: 3 }, () => [])
  );
  const [twoDigit, setTwoDigit] = useState<string[][]>(
    Array.from({ length: 2 }, () => [])
  );

  function random_number(range: number): string {
    return Math.floor(Math.random() * 10 ** range)
      .toString()
      .padStart(range, "0");
  }

  function handleClick() {
    setSixDigit(convert_number_to_stringId(random_number(6)));
    setFirstThreeDigit(convert_number_to_stringId(random_number(3)));
    setSecThreeDigit(convert_number_to_stringId(random_number(3)));
    setTwoDigit(convert_number_to_stringId(random_number(2)));
  }

  return (
    <div className="min-h-screen bg-[#272927]">
      <div className="flex justify-center items-center flex-col space-y-10">
        <BoxNumber
          amountNumber={6}
          heigh={"h-[230px]"}
          width={"w-[850px]"}
          circleSize={17}
          randomNumber={sixDigit}
        />
        <div className="flex flex-row space-x-20">
          <BoxNumber
            amountNumber={3}
            heigh={"h-[140px]"}
            width={"w-[450px]"}
            circleSize={17}
            randomNumber={firstThreeDigit}
          />
          <BoxNumber
            amountNumber={3}
            heigh={"h-[140px]"}
            width={"w-[450px]"}
            circleSize={17}
            randomNumber={secThreeDigit}
          />
        </div>
        <BoxNumber
          amountNumber={2}
          heigh={"h-[150px]"}
          width={"w-[400px]"}
          circleSize={17}
          randomNumber={twoDigit}
        />
        <Button onClick={handleClick}>Random Number</Button>
      </div>
    </div>
  );
};

export default Home;
