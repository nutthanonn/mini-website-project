import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeType } from "../assets/interfaces/themes";

interface AppProviderPropsTypes {
  themes: ThemeType;
  children: ReactElement;
}

const Provider: React.FC<AppProviderPropsTypes> = (props) => {
  const { themes, children } = props;

  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};

export default Provider;
