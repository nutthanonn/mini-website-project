import React, { useState } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { TodoStoreImpl } from "../store/todoStore";
import { HiPencil } from "react-icons/hi";
import { ImBin } from "react-icons/im";

import { motion } from "framer-motion";

interface ItemProps {
  id: string;
  title: string;
  store: TodoStoreImpl;
}

const useStyles = makeStyles({
  root: {
    margin: 30,
    backgroundColor: "white",
    width: 500,
    "@media only screen and (max-width: 700px)": {
      width: 300,
    },
    "@media only screen and (max-width: 500px)": {
      width: 170,
    },
    borderRadius: 5,
  },
});

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const Item: React.FC<ItemProps> = ({ id, title, store }) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>(title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleClickEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleClickDelete = () => {
    store.delete_data(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.change_title(id, value);
    setIsEdit(false);
  };

  return (
    <motion.div
      variants={animation}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <Toolbar className={classes.root}>
        {isEdit ? (
          <Box sx={{ flexGrow: 1 }} component="form" onSubmit={handleSubmit}>
            <InputBase
              onChange={handleChange}
              value={value}
              sx={{ width: "100%", color: isEdit ? "red" : "black" }}
              type="text"
            />
          </Box>
        ) : (
          <Typography sx={{ flexGrow: 1 }}>{title}</Typography>
        )}

        <Box>
          <Tooltip title="Edit" placement="top">
            <IconButton onClick={handleClickEdit}>
              <HiPencil />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="top">
            <IconButton onClick={handleClickDelete}>
              <ImBin />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </motion.div>
  );
};

export default Item;
