import React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to bottom, #cffffe, #d3fcee, #dcf7e0, #e7f1d5, #f2ebcf, #f8e5cb, #fcdec9, #ffd8ca, #ffd0cc, #ffc9d4, #ffc4e1, #ffc1f3);",
    minHeight: "100vh",
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Box />
    </Box>
  );
};

export default App;
