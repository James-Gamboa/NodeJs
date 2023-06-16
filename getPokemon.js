import chalk from "chalk";
import { fetchPokemon } from "./fetchPokemon.js";

async function obtenerPokemon() {
  try {
    const numeroPokemon = 25;
    if (numeroPokemon < 1 || numeroPokemon > 898) {
      throw new Error("Número de Pokémon inválido");
    }
    const data = await fetchPokemon(numeroPokemon);
    const nombre = data.name;
    const tipos = data.types.map((type) => type.type.name);
    console.log(
      chalk.yellow(`El Pokémon ${nombre} es de tipo ${tipos.join(" y ")}`)
    );
  } catch (error) {
    console.error(error.message);
  }
}

obtenerPokemon();
