import React from "react";
import styled from "styled-components";
import Card from "./components/Card";

const Center = styled.div`
  height: 100vh;
  background: #a3a3fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <Center>
      <Card />
    </Center>
  );
};

export default App;
