import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <GoogleOAuthProvider clientId="288557343484-knlg1b7a6jcmmu6nv1k1oqrcudt6uuhb.apps.googleusercontent.com">
      {props.children}
    </GoogleOAuthProvider>
  );
};

export default AuthProvider;
