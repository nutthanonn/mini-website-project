import React from "react";
import { FiGithub } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import type { NextComponentType } from "next";

const Navbar: NextComponentType = () => {
  return (
    <nav className="p-1 flex flex-row items-center bg-white">
      <p className="pl-5">เว็ปสุ่มเลข lottery</p>
      <div className="flex grow"></div>
      <Tooltip title="Follow my Github" className="hover:bg-slate-200">
        <IconButton>
          <FiGithub />
        </IconButton>
      </Tooltip>
    </nav>
  );
};

export default Navbar;
