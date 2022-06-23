import React, { useState } from "react";
import styled from "styled-components";

const LabelSwitch = styled.label`
  width: 50px;
  height: 20px;
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

const Slider = styled.span`
  position: absolute;
  border-radius: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4164e3;
  cursor: pointer;
  &:before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    background-color: white;
    top: 2.2px;
    left: 2px;
    transform: ${(props: { variant: boolean }) =>
      props.variant ? "translateX(190%)" : "translateX(0px)"};
    transition: 200ms;
  }
`;

const Switch: React.FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  return (
    <LabelSwitch>
      <Input
        type="checkbox"
        checked={isCheck}
        onChange={() => setIsCheck(!isCheck)}
      />
      <Slider variant={isCheck} />
    </LabelSwitch>
  );
};

export default Switch;
