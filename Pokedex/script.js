const pokeNumber = document.querySelector('.pokemonNumber');
const pokeName = document.querySelector('.pokemonName');


const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    const data = await response.json();
    return data;
}
//async function also return a promise
const renderData = async (pokemon) => {
    
    const data = await fetchPokemon(pokemon);

}
renderData(25);