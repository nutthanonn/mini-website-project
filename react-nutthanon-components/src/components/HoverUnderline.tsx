import React from "react";
import styled from "styled-components";

const Text = styled.p`
  display: inline;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const HoverUnderline: React.FC = () => {
  return <Text>Nutthanon</Text>;
};

export default HoverUnderline;
