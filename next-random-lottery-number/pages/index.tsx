import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import CountUp from "react-countup";

const Home: NextPage = () => {
  const [num, setNum] = useState<string>("");
  const [val, setVal] = useState<string>("2-last");

  function handleChange(event: SelectChangeEvent): void {
    setVal(event.target.value);
  }

  function RandomRangeNumber(min: number, max: number): string {
    return (Math.floor(Math.random() * (max - min)) + min).toString();
  }

  function handleClick() {
    switch (val) {
      case "2-last":
        setNum(RandomRangeNumber(0, 100).padStart(6, "X"));
        break;
      case "3-last":
        setNum(RandomRangeNumber(0, 1000).padStart(6, "X"));
        break;
      case "3-first":
        setNum(RandomRangeNumber(0, 1000).padEnd(6, "X"));
        break;
      case "6-number":
        setNum(RandomRangeNumber(0, 1000000).padStart(6, "X"));
        break;
    }
  }

  return (
    <div>
      <Head>
        <title>Nutthanon Random Lottery Number</title>
      </Head>
      <div className="min-h-screen items-center justify-center flex flex-col">
        <div className="text-9xl">
          <CountUp duration={0.75} start={0} end={100} />
        </div>
        <div className="flex flex-col mt-10">
          <Select value={val} onChange={handleChange}>
            <MenuItem value="2-last">สองตัวท้าย</MenuItem>
            <MenuItem value="3-last">สามตัวท้าย</MenuItem>
            <MenuItem value="3-first">สามตัวหน้า</MenuItem>
            <MenuItem value="6-number">หกตัว</MenuItem>
          </Select>
          <Button className="mt-2" onClick={handleClick}>
            Start Random
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
