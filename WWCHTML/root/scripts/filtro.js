// const imput = document.querySelectorAll('.navFilter');

// imput.forEach((typeText) => {
//   typeText.addEventListener("click", (event) => {
//     event.preventDefault();
//     const type = typeText.textContent.toLowerCase();
//     console.log(typeText);
  
//   });
// })

// const url = "https://pokeapi.co/api/v2/pokemon";

// const getPokemonData = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data.results
// };

const dataApiPokemon = async () => {
  try {
    const res = await fetch ("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    const dataPokemon = data.results.map(dataPoke => dataPoke.url)
    console.log(dataPokemon)
  } catch (error) {
    console.log(error)
  }
}
dataApiPokemon()

// const dataTypes = async () => {
//   try {
//     const res = await fetch ("dataApiPokemon")
//     const data = await res.json()
//     const dataTypeName = data.types.map(dataPoke => dataPoke.type)
//     console.log(dataTypeName)
//   } catch (error) {
//     console.log(error)
//   }
// }
// dataTypes()