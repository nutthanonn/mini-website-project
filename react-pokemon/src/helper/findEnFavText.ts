import { flavor_text_entries } from "../assets/interfaces/apiPokemonSpecies";

export function FindFavText(data: flavor_text_entries[]) {
  const enWord = data.filter((item) => {
    return item.language.name = "en";
  });

  return enWord[Math.floor(Math.random() * enWord.length)].flavor_text;
}
