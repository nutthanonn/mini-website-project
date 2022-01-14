import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { makeStyles } from "@mui/styles";

import { AiFillGithub } from "react-icons/ai";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#610094",
    color: "white",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Create by Nutthanon </Typography>
        <Tooltip title="github" placement="top">
          <IconButton href="https://github.com/nutthanonn">
            <AiFillGithub color="white" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default Footer;
