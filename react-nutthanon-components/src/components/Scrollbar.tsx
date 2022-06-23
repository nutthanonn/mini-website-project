import React from "react";
import styled from "styled-components";

const CustomScrollbar = styled.div`
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #1e3f20;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4a7856;
    border-radius: 12px;
  }
`;

const Scrollbar: React.FC = () => {
  return <CustomScrollbar></CustomScrollbar>;
};

export default Scrollbar;
