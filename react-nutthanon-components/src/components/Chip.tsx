import React from "react";
import styled from "styled-components";

interface ChipProps {
  title: string;
}

const ChipCustom = styled.div`
  padding: 1px 10px;
  border-radius: 20px;
  box-shadow: 0 0 0 1.5px black;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.7);
    transition: 0.5s;
  }
  color: white;
  position: relative;
  display: inline-block;
`;

const Chip: React.FC<ChipProps> = (props) => {
  const { title } = props;

  return <ChipCustom>{title}</ChipCustom>;
};

export default Chip;
