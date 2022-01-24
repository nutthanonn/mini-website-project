import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { FcTodoList } from "react-icons/fc";

import { makeStyles } from "@mui/styles";

interface FormProps {
  changeData: (id: string, title: string, discription: string) => void;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxForm: {
    marginTop: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    padding: 20,
    borderRadius: 20,
  },
});

const Form: React.FC<FormProps> = ({ changeData }) => {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");

  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(event.target.value);
  };

  const handleChangeDiscription = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDiscription(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    changeData(uuidv4(), title, discription); //function from App component
    event.preventDefault();
    setDiscription("");
    setTitle("");
  };

  return (
    <div className={classes.root}>
      <Box component="form" onSubmit={handleSubmit} className={classes.boxForm}>
        <Tooltip title="TODOLIST" placement="top">
          <IconButton>
            <FcTodoList size="30" />
          </IconButton>
        </Tooltip>
        <TextField
          placeholder="Title..."
          onChange={handleChangeTitle}
          value={title}
          variant="outlined"
          sx={{ width: 200 }}
          size="small"
          type="text"
        />
        <TextField
          placeholder="Description..."
          onChange={handleChangeDiscription}
          value={discription}
          size="small"
          multiline
          rows={4}
          sx={{ width: 400, m: 2 }}
          type="text"
        />
        <Button type="submit">Create Accordion</Button>
      </Box>
    </div>
  );
};

export default Form;
