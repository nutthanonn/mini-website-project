import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { DataStoreImpl } from "../../store/dataStore";
import { observer } from "mobx-react";

interface NumberButtonProps {
  txt: string;
  store: DataStoreImpl;
}

const useStyles = makeStyles({
  root: {
    width: "90%",
    borderRadius: 10,
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
    "&:active": {
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    },
  },
  boxItem: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const NumberButton: React.FC<NumberButtonProps> = observer(({ txt, store }) => {
  const classes = useStyles();

  const handleCilck = (event: React.MouseEvent<HTMLElement>) => {
    store.change_data(txt);
  };

  return (
    <Box className={classes.root} onClick={handleCilck}>
      <Box className={classes.boxItem}>
        <Typography>{txt}</Typography>
      </Box>
    </Box>
  );
});

export default NumberButton;
