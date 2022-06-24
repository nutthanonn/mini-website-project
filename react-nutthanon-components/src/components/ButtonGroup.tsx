import React, { useState } from "react";
import styled from "styled-components";

const ButtonGroupCustom = styled.div`
  display: flex;
`;

const Title = styled.button`
  outline: none;
  padding: 10px 20px;
  min-width: 50px;
  max-width: 200px;
  border: none;
  background-color: rgb(27, 47, 73);
  color: white;
  font-weight: bold;
  box-shadow: 0 0 0 1px rgb(55, 125, 246, 0.8);

  &:hover {
    background-color: rgba(27, 47, 73, 0.8);
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const ButtonGroup: React.FC = () => {
  const [btn, setBtn] = useState<boolean>(false);

  return (
    <ButtonGroupCustom>
      <Title>Home</Title>
      <Title>nutthanon</Title>
    </ButtonGroupCustom>
  );
};

export default ButtonGroup;
