import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { TodoStore } from "./store/todoStore";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to right top, #150050, #1d0156, #25005d, #2c0063, #340069, #3a006f, #410074, #47007a, #4d0080, #540087, #5a008d, #610094)",
    minHeight: "100vh",
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header />
      <Box sx={{ minHeight: "60vh" }}>
        <Body store={TodoStore} />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
