import React from "react";
import moment from "moment";
import {
  BsApple,
  BsFillMenuButtonWideFill,
  BsBatteryFull,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import SiriIcons from "../assets/siri-icons.png";

const toolsItems: string[] = [
  "Finder",
  "Files",
  "Edit",
  "View",
  "Go",
  "Window",
  "Help",
];

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row h-6 justify-between space-x-2 text-white font-sans text-sm font-light">
      <div className="h-6 bg-[#3711A1] absolute w-screen"></div>
      <div
        className="flex flex-row relative items-center space-x-1"
        id="first-box"
      >
        <div className="hover:bg-[#6037C2] px-3  py-1 rounded-sm">
          <BsApple color="white" height={0.5} />
        </div>
        {toolsItems.map((items, index) => {
          return (
            <div
              id={items}
              key={index}
              className={`hover:bg-[#6037C2] px-2 rounded-sm ${
                items === "Finder" ? "font-bold" : "font-light"
              }`}
            >
              {items}
            </div>
          );
        })}
      </div>
      <div
        id="sec-box"
        className="flex flex-row relative items-center space-x-2 pr-7"
      >
        <div className="hover:bg-[#6037C2] px-2 rounded-sm" id="battery">
          <BsBatteryFull size={20} />
        </div>
        <div id="wifi" className="hover:bg-[#6037C2] px-2 rounded-sm py-1">
          <FaWifi />
        </div>
        <div id="search" className="hover:bg-[#6037C2] px-2 rounded-sm py-1">
          <BiSearch />
        </div>
        <div id="menu" className="hover:bg-[#6037C2] px-2 rounded-sm py-1">
          <BsFillMenuButtonWideFill />
        </div>
        <div
          id="siriIcons"
          className="bg-cover w-5 h-5 hover:bg-[#6037C2] px-2 rounded-sm py-1"
          style={{ backgroundImage: `url(${SiriIcons})` }}
        ></div>
        <div id="date-time" className="flex flex-row items-center">
          <div id="day">{moment().format("dddd").slice(0, 3)} &nbsp;</div>
          <div id="day-number">
            {moment().format("ll").split(" ")[1].slice(0, 1)}&nbsp;
          </div>
          <div id="month">{moment().format("ll").split(" ")[0]} &nbsp;</div>
          <div id="time">{moment().format("LT")}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
