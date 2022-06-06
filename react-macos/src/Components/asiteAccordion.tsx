import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { TypeFinderItems } from "../data/typeFinderData";

const AsiteAccordion: React.FC<TypeFinderItems> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <div>
      <Accordion
        sx={{ bgcolor: "rgba(43, 35, 68, 0.7)", boxShadow: 0, color: "white" }}
      >
        <AccordionSummary
          expandIcon={
            mouseOver ? (
              isOpen ? (
                <IoIosArrowForward color="white" />
              ) : (
                <IoIosArrowUp color="white" />
              )
            ) : (
              ""
            )
          }
          onClick={() => setIsOpen(!isOpen)}
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          {props.title}
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "rgba(43, 35, 68, 0.7)" }}>
          <div className="flex flex-col space-y-2 font-sans text-sm font-light">
            {props.child.map((items, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-[#423C58] pl-2 rounded-sm"
                >
                  {items}
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AsiteAccordion;
