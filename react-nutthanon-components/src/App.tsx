import React, { useState } from "react";
import styled from "styled-components";
import * as themes from "./assets/themes";
import Provider from "./provider/AppProvider";

interface themesProps {
  dark: string;
  light: string;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");

  function ChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Provider theme={themes[theme as keyof themesProps]}>
      <Center>
        <LabelCustom>
          <InputCustom
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
          />
          Custom Upload
        </LabelCustom>
      </Center>
    </Provider>
  );
};

export default App;

const InputCustom = styled.input`
  display: none;
`;

const LabelCustom = styled.label`
  border: 1px solid #ccc;
  padding: 6px 12px;
  cursor: pointer;
`;

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
