import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { themeType } from "../assets/interfaces/theme";

interface AppProviderPropsTypes {
  children: ReactElement;
  theme: themeType;
}

const Provider: React.FC<AppProviderPropsTypes> = (props: any) => {
  const { children, theme } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
