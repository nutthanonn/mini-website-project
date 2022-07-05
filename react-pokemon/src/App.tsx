import React, { useState } from "react";
import * as theme from "./assets/themes";
import styled from "styled-components";
import Provider from "./provider/AppProvider";
import SelectPokemon from "./shared/SelectPokemon";

const App: React.FC = () => {
  return (
    <Provider themes={theme["light"]}>
      <Center>
        <SelectPokemon />
      </Center>
    </Provider>
  );
};

export default App;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.primary};
`;
