import React from "react";
import styled from "styled-components";
import Logo from "../assets/fish.jpeg";
import Chip from "./Chip";

const CardCutom = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 300px;
  max-width: 400px;
  height: fit-content;
  border: 1px solid black;
  padding: 10px;
  border-radius: 20px;
  background: linear-gradient(180deg, #333 60%, #000000 40%);
`;

const CardImg = styled.img`
  border-radius: 50%;
  background-size: cover;
  width: 50px;
  height: 50px;
  box-shadow: 0 0 0 2px rgba(90, 124, 247, 0.3);
`;

const CardHeader = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  gap: 10px;
`;

const CardTitle = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: column;
  justify-content: center;
`;

const CardSubTitle = styled.p`
  text-transform: capitalize;
  color: white;
`;

const CardDetails = styled.p`
  color: whitesmoke;
  font-size: 30%;
`;

const CardChip = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  gap: 0 5px;
  align-items: center;
  flex-wrap: wrap;
`;

const Card: React.FC = () => {
  return (
    <CardCutom>
      <CardHeader>
        <CardImg src={Logo} />
        <CardTitle>
          <CardSubTitle>Nutthanon</CardSubTitle>
          <CardDetails>&bull; &nbsp;Work in line thailand</CardDetails>
        </CardTitle>
      </CardHeader>
      <CardChip>
        <Chip title="Nutthanon" color="#fffada" />
      </CardChip>
    </CardCutom>
  );
};

export default Card;
