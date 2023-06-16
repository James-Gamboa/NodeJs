import fs from "fs";

function writeToFile(mensaje) {
  fs.writeFileSync("resultados.txt", mensaje);
  console.log('Mensaje escrito en el archivo "resultados.txt"');
}

try {
  writeToFile("Examen finalizado");
} catch (error) {
  console.error(`Error al escribir en el archivo "resultados.txt"`);
}
