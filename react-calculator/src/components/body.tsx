import React from "react";
import Screen from "./items/screen";
import NumberButton from "./items/numberButton";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { DataStoreImpl } from "../store/dataStore";
interface BodyProps {
  store: DataStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  boxItem: {
    minWidth: "40vw",
    minHeight: 340,
    backgroundColor: "#CFFFFE",
    borderRadius: 10,
    border: 0,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Item: string[] = [
  "9",
  "8",
  "7",
  "/",
  "6",
  "5",
  "4",
  "*",
  "3",
  "2",
  "1",
  "-",
  "C",
  "0",
  ".",
  "+",
];

const Body: React.FC<BodyProps> = ({ store }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.boxItem}>
        <Screen store={store} />
        <Grid container spacing={1}>
          {Item.map((item, index) => {
            return (
              <Grid key={index} item md={3} className={classes.gridContainer}>
                <NumberButton txt={item} store={store} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Body;
