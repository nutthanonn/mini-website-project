import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { PokemonFormTypes } from "../assets/interfaces/apiPokemonForm";
import BackImg from "../assets/img/pokeBackground.png";

const Card: React.FC<PokemonFormTypes> = (props) => {
  const { sprites } = props;

  return (
    <FlipCard>
      <FlipCardInner className="inner">
        <FlipCardFront>
          <ImgFontCustom
            src={sprites.front_default}
            width="100%"
            height="100%"
          />
        </FlipCardFront>
        <FlipCardBack>
          <ImgBackCustom src={BackImg} />
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

export default observer(Card);

const FlipCard = styled.div`
  background-color: transparent;
  width: 20rem;
  height: 28rem;
  perspective: 62.5rem;
  display: flex;
  margin: 5rem auto;
  &:hover .inner {
    transform: rotateY(180deg);
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.1s;
`;

const FlipCardCustom = styled.div`
  border-radius: 1rem;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const FlipCardFront = styled(FlipCardCustom)`
  background-color: #bbb;
  color: black;
  box-shadow: inset 0 0 0 10px yellow;
`;

const FlipCardBack = styled(FlipCardCustom)`
  transform: rotateY(180deg);
`;

const ImgFontCustom = styled.img`
  width: 10rem;
  height: 10rem;
`;

const ImgBackCustom = styled.img`
  width: 100%;
  height: 100%;
`;
