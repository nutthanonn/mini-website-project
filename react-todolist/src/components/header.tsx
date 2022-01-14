import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#610094",
    color: "white",
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Toolbar>
        <Typography variant="h5">Todolist Project</Typography>
      </Toolbar>
    </Box>
  );
};

export default Header;
