import React, { useState } from "react";
import Item from "./item";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react";
import { FcTodoList } from "react-icons/fc";
import { TodoStoreImpl } from "../store/todoStore";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

interface BodyProps {
  store: TodoStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  bgBox: {
    backgroundColor: "black",
    borderRadius: 10,
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    border: 0,
    marginBottom: 20,
  },
  iconTop: {
    display: "inline-flex",
    justifyContent: "space-around",
    width: 100,
    margin: 12,
  },
  formBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
  },
  paperForm: {
    width: 500,
    display: "flex",
    alignItems: "center",
    "@media only screen and (max-width: 700px)": {
      width: 300,
    },
    "@media only screen and (max-width: 500px)": {
      width: 170,
    },
  },
});

if (typeof window !== "undefined") {
  injectStyle();
}

const Body: React.FC<BodyProps> = observer(({ store }) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("");

  const toastifyFunc = (key?: string) => {
    if (key === "won-lottery") {
      toast.success("Create todo!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warning("Please check your todo", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length > 0) {
      toastifyFunc("won-lottery");
      store.add_data(value);
      setValue("");
    } else {
      toastifyFunc();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.bgBox}>
        <Box className={classes.iconTop}>
          <Avatar sx={{ width: 20, height: 20, bgcolor: "#FF5F5A" }}> </Avatar>
          <Avatar sx={{ width: 20, height: 20, bgcolor: "#FFBE2E" }}> </Avatar>
          <Avatar sx={{ width: 20, height: 20, bgcolor: "#2ACA44" }}> </Avatar>
        </Box>
        <Box className={classes.boxContainer}>
          <Box
            component="form"
            className={classes.formBox}
            onSubmit={handleSubmit}
          >
            <Paper elevation={1} className={classes.paperForm}>
              <InputBase
                sx={{ p: "2px 10px", width: "100%" }}
                rows={4}
                value={value}
                onChange={handleChange}
                type="text"
                placeholder="Create your todolist"
              />
              <Tooltip title="todolist" sx={{ p: 1 }}>
                <IconButton>
                  <FcTodoList />
                </IconButton>
              </Tooltip>
            </Paper>
            <Button sx={{ height: 40 }} type="submit">
              Add Todo
            </Button>
          </Box>

          {store.data.length > 0 ? (
            <Box>
              {store.data.map((item) => {
                return (
                  <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    store={store}
                  />
                );
              })}
            </Box>
          ) : (
            <Box />
          )}
        </Box>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </Box>
  );
});

export default Body;
