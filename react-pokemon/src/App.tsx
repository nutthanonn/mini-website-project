import React, { useState } from "react";
import * as theme from "./assets/themes";
import styled from "styled-components";
import Provider from "./provider/AppProvider";
import SelectPokemon from "./shared/SelectPokemon";
import bg from "./assets/img/background.jpeg";

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
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;
