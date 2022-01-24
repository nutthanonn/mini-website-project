import React, { useState } from "react";
import Body from "./components/body";
import Form from "./components/form";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

interface DataProps {
  id: string;
  title: string;
  discription: string;
}

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to right bottom, #222831, #2a3d4d, #2c5569, #276e84, #1a889c, #3999ae, #51aac1, #68bbd4, #97c5e1, #bdd1e8, #dadeeb, #eeeeee)",
    minHeight: "100vh",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<DataProps[]>([]);
  const changeData = (id: string, title: string, discription: string): void => {
    const newData: DataProps = {
      id: id,
      title: title,
      discription: discription,
    };
    setData([...data, newData]);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Form changeData={changeData} />

      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data.map((item) => {
          return (
            <Body
              id={item.id}
              key={item.id}
              title={item.title}
              discription={item.discription}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default App;
