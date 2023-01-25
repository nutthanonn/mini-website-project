import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "black" }}>Helloworld</h1>
      <Container>
        <GoogleLogin
          onSuccess={(response: CredentialResponse) => {
            cookies.set("google_token", response.credential, { path: "/" });
            navigate("/home");
          }}
          onError={() => {
            console.log("aLogin Failed");
          }}
          useOneTap
          text="continue_with"
          state_cookie_domain="localhost"
          width="400px"
        />
      </Container>
    </>
  );
};

export default Landing;

const Container = styled.div`
  width: 400px;
`;
