import chalk from "chalk";

function formatPokemon(nombre, tipo1, tipo2) {
  if (!nombre || !tipo1) {
    throw new Error("Datos de Pokémon incompletos");
  }

  let formattedText = chalk.yellow(`El Pokémon ${nombre} es de tipo ${tipo1}`);
  if (tipo2) {
    formattedText += ` y ${tipo2}`;
  }

  return formattedText;
}

const nombre = "Pikachu";
const tipo1 = "Eléctrico";
const tipo2 = "Normal";

try {
  const formattedText = formatPokemon(nombre, tipo1, tipo2);
  console.log(formattedText);
} catch (error) {
  console.error(error.message);
}
