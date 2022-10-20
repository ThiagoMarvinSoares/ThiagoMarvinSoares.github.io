const pokeNumber = document.querySelector('.pokemonNumber');
const pokemonName = document.querySelector('.pokemonName');
const pokemonImage = document.querySelector('.pokemon-display');
const form = document.querySelector('.form');
const input = document.querySelector('.search-bar');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');

//function that pull the pokemon from an API
const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(response.status === 200){
        const data = await response.json();
        return data; 
    } 
};

//function that print pokemon number, name and sprite
const renderData = async (pokemon) => {
    pokemonName.innerHTML = 'Searching...';
    pokeNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data) {
        pokemonName.innerHTML = data.name;
        pokeNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonImage.style.display = 'block';
        searchPokemon = data.id;
    } else {
        pokemonName.innerHTML = 'Not found';
        pokeNumber.innerHTML = '';
        pokemonImage.style.display = 'none';
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderData(input.value.toLowerCase());
    input.value = '';
});

let searchPokemon = 257;
renderData(searchPokemon);

btnLeft.addEventListener('click', () => {
    if(searchPokemon > 1) {
        searchPokemon -= 1;
        renderData(searchPokemon);
    }
});

btnRight.addEventListener('click', () => {
    searchPokemon += 1;
    renderData(searchPokemon);
});

