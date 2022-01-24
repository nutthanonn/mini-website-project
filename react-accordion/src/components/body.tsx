import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoMdArrowDropdown } from "react-icons/io";
import { makeStyles } from "@mui/styles";

interface BodyProps {
  id: string;
  title: string;
  discription?: string;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 30,
    width: 900,
  },
});

const Body: React.FC<BodyProps> = ({ id, title, discription }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<IoMdArrowDropdown />}>
          <Typography variant="h3">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{discription}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Body;
