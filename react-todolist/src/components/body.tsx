import React, { useState } from "react";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
});

const Body: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <p>Hello</p>
    </Box>
  );
};

export default Body;
