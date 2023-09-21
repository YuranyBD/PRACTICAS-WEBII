fetch("https://pokeapi.co/api/v2/pokemon/100", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    const pokemonWeight = data.weight;
    console.log(`El peso del pokémon es: ${pokemonWeight}`);
  })
  .catch((error) => console.error("Ha ocurrido un error:", error));
