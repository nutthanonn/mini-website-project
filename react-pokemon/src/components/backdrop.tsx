import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Card from "./Card";
import { observer } from "mobx-react";
import { GlobalStoreImpl } from "../store/globalStore";
import { fetchPokemonForm } from "../assets/api/pokemonForm";
import { PokemonFormTypes } from "../assets/interfaces/apiPokemonForm";

interface BackdropPropsType {
  handleOpenBackDrop: () => void;
  store: GlobalStoreImpl;
}

const Backdrop: React.FC<BackdropPropsType> = (props) => {
  const { handleOpenBackDrop, store } = props;
  const [pokemonFormData, setPokemonFormData] =
    useState<PokemonFormTypes | null>();

  useEffect(() => {
    async function fetch() {
      const res = await fetchPokemonForm(store.pokemonName);
      setPokemonFormData(res);
    }
    fetch();
  }, [store.pokemonName]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      handleOpenBackDrop();
    }
  };

  return (
    <Box onClick={handleClick}>
      {pokemonFormData ? <Card {...pokemonFormData} /> : ""}
    </Box>
  );
};

export default observer(Backdrop);

const onLoadAnimation = keyframes`
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
`;

const Box = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgb(219, 226, 239, 0.5);
  animation: ${onLoadAnimation} 0.2s ease;
`;
