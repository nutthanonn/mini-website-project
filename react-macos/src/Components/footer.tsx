import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { Items } from "../data/iconsData";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <div className="flex flex-row bottom-0 w-[100%] fixed items-center justify-center">
        <div
          className="flex flex-row mb-2  p-1 rounded-xl space-x-1 animate-popup"
          style={{ backgroundColor: "rgba(148, 163, 184, 0.3)" }}
        >
          {Items.map((i, index) => {
            return (
              <Tooltip title={i.name} arrow>
                <div className="w-10 h-10">
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${i.pic})` }}
                    className="bg-cover w-[100%] h-[100%] rounded-md"
                  ></div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
