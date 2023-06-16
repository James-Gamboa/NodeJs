import axios from "axios";

export async function fetchPokemon(numero) {
  const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
  const response = await axios.get(url);
  return response.data;
}
