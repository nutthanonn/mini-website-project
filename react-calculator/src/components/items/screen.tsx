import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { DataStoreImpl } from "../../store/dataStore";
import { observer } from "mobx-react";

interface ScreenButtonProps {
  store: DataStoreImpl;
}

const useStyles = makeStyles({
  root: {
    width: "95%",
    height: 100,
    margin: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
  },
  toolScreen: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: 1,
  },
});

const Screen: React.FC<ScreenButtonProps> = observer(({ store }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Toolbar className={classes.toolScreen}>
        <Typography sx={{ ml: 1 }} variant="h4">
          {store.Symbol}
        </Typography>
        <Typography variant="h3">{store.Data}</Typography>
      </Toolbar>
    </Box>
  );
});

export default Screen;
