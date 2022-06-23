import React from "react";
import styled from "styled-components";

const InputCustom = styled.input`
  border: 0;
  border-radius: 10px;
  padding: 2px 10px;
  &:focus {
    outline: none;
  }
`;

const TextField: React.FC = () => {
  return (
    <form action="">
      <InputCustom placeholder="Nutthanon" />
    </form>
  );
};

export default TextField;
