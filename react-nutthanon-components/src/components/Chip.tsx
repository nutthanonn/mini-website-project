import React from "react";
import styled from "styled-components";

interface ChipProps {
  title: string;
  color?: string;
}

const ChipCustom = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1px 5px;
  text-transform: capitalize;
  border-radius: 10px;
  box-shadow: 0 0 0 1px black;
  cursor: pointer;
  transition: 0.5s;
  background-color: #706a6a;
  font-size: 10px;
  &:hover {
    background-color: ${(props) => (props.color ? props.color : "black")};
    transition: 0.5s;
  }
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chip: React.FC<ChipProps> = (props) => {
  const { title, color } = props;

  return (
    <ChipCustom color={color}>
      <p>{title}</p>
    </ChipCustom>
  );
};

export default Chip;
