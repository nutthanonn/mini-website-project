import React, { useEffect, useState } from "react";
import Select from "react-select";
import { fetchPokemonName } from "../assets/api/pokemonName";
import { PokemonResultsType } from "../assets/interfaces/apiPokemonName";
import { ConvertSelectData } from "../helper/convertSelectData";
import { optionsType } from "../helper/convertSelectData";
import styled from "styled-components";

const SelectPokemon: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<PokemonResultsType[]>([]);
  const [selectedOption, setSelectedOption] = useState<optionsType | null>(
    null
  );

  useEffect(() => {
    async function fetch() {
      const res = await fetchPokemonName();
      setListPokemon(res.results);
    }
    fetch();
  }, []);

  const handelSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleChange = (options: any) => {
    setSelectedOption(options);
  };

  return (
    <Container>
      <FormCustom onSubmit={handelSubmit}>
        <SelectCustom
          options={ConvertSelectData(listPokemon)}
          onChange={handleChange}
        />
        <ButtonCustom type="submit">Select Pokemon</ButtonCustom>
      </FormCustom>
    </Container>
  );
};

export default SelectPokemon;

const Container = styled.div`
  display: flex;
  height: auto;
`;

const FormCustom = styled.form`
  margin: 20rem auto;
`;

const SelectCustom = styled(Select)`
  width: 30rem;
`;

const ButtonCustom = styled.button`
  display: flex;
  border: 0;
  margin: 10px auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  cursor: pointer;
  width: 7rem;
  height: 1.2rem;
  text-align: center;
`;
