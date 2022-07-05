import React from "react";
import styled from "styled-components";

const Backdrop: React.FC = () => {
  return (
    <Box>
    </Box>
  );
};

export default Backdrop;

const Box = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgb(219, 226, 239, 0.6);
`;
