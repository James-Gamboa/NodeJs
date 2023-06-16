import fs from "fs";

fs.readFile("datos.txt", "utf8", (error, data) => {
  if (error) {
    console.log("El archivo 'datos.txt' no existe");
  } else {
    console.log(data);
  }
});
