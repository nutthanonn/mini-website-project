import React from "react";
import AuthProvider from "./AuthProvider";

const AppProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <AuthProvider>{props.children}</AuthProvider>
    </>
  );
};

export default AppProvider;
