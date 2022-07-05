import React, { useEffect, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { fetchPokemonName } from "../assets/api/pokemonName";
import { PokemonResultsType } from "../assets/interfaces/apiPokemonName";
import { ConvertSelectData } from "../helper/convertSelectData";

const SelectPokemon: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<PokemonResultsType[]>([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    async function fetch() {
      const res = await fetchPokemonName();
      setListPokemon(res.results);
    }
    fetch();
  }, []);

  return (
    <div>
      <SelectCustom
        options={ConvertSelectData(listPokemon)}
        placeholder="Search your pokémon"
        onChange={() => setSelectedOption}
        defaultValue={selectedOption}
      />
    </div>
  );
};

export default SelectPokemon;

const SelectCustom = styled(Select)`
  width: 30rem;
  font-size: 1rem;
`;
