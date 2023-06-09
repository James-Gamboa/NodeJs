// @ts-nocheck
const axios = require("axios");

async function getCountryData(country) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${country}`
    );
    console.log("Datos de respuesta:", response.data);
  } catch (error) {
    console.error("Error en la obtencion de datos:", error.message);
  }
}

getCountryData("Germany");
