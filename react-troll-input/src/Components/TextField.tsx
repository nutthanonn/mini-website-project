import React, { useState } from "react";
import styled from "styled-components";

interface TrollInputProps {
  top?: string;
  left?: string;
}

const TrollInput = styled.input`
  &:focus {
    border: 0;
  }
  outline: none;
  border-radius: 10px;
  padding: 2px 6px;
  border: 0;
  position: absolute;
  top: ${(props: TrollInputProps) => (props.top ? props.top + "%" : "")};
  left: ${(props: TrollInputProps) => (props.left ? props.left + "%" : "")};
  transition: 0.2s;
  transition-timing-function: ease-in-out;
`;

const TextField: React.FC = () => {
  const [Top, setTop] = useState<string>("");
  const [Left, setLeft] = useState<string>("");

  function handleClick() {
    const top = Math.floor(Math.random() * 101);
    const left = Math.floor(Math.random() * 101);
    setTop(top.toString());
    setLeft(left.toString());
  }

  return (
    <div>
      <TrollInput
        placeholder="username"
        onClick={handleClick}
        type="text"
        top={Top}
        left={Left}
        value=""
      />
    </div>
  );
};

export default TextField;
