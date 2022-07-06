import React, { useState } from "react";
import * as theme from "./assets/themes";
import styled from "styled-components";
import Provider from "./provider/AppProvider";
import SelectPokemon from "./components/SelectPokemon";
import bg from "./assets/img/background.jpeg";
import Backdrop from "./components/backdrop";
import { GlobalStore } from "./store/globalStore";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenBackDrop = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Provider themes={theme["light"]}>
      <Center>
        <SelectPokemon
          handleOpenBackDrop={handleOpenBackDrop}
          store={GlobalStore}
        />
        {isOpen ? (
          <Backdrop
            handleOpenBackDrop={handleOpenBackDrop}
            store={GlobalStore}
          />
        ) : (
          ""
        )}
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
