import React from "react";
import type { NextPage } from "next";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#F4BCBC]">
      <Navbar />
    </div>
  );
};

export default Home;
