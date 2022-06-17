import React from "react";
import styled from "styled-components";
import TextField from "./Components/TextField";

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;

const App: React.FC = () => {
  return (
    <Center>
      <TextField />
    </Center>
  );
};

export default App;
