const useCards = () => {
    const loadCards = async (species, loadSpeciesData) => {
        console.log(species);
        const cards = await Promise.all(species.map(async (pokemon) => {
            const speciesData = await loadSpeciesData(pokemon.name);
            const pokemonData = await loadPokemonData(speciesData.varieties[0].pokemon.name);
            
            return await createCard(speciesData, pokemonData, pokemon.selected);
        }));

        return cards;
    }

    const createCard = async (speciesData, pokemonData, selected) => {
        const card = {};
        card.name = pokemonData.name;
        card.id = pokemonData.id;
        card.types = pokemonData.types;
        const imageSrc = pokemonData.sprites.other["official-artwork"].front_default;
        card.imageSrc = imageSrc;
        card.species = speciesData.name;
        await preloadImage(imageSrc);
        card.description = speciesData.flavor_text_entries.find(flavor_text => flavor_text.language.name === "en").flavor_text;
        card.selected = selected;
        return card;
    }

    const loadPokemonData = async (name) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            if(response.ok) {
                return await response?.json();
            } else {
                throw Error("404 - Couldn't find data or connect to API")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const preloadImage = async (url) => {
        new Promise(resolve => {
            const img = new Image();
            img.src = url;
            img.onload = resolve();
        });
        
    }

    return [ loadCards ];
}

export default useCards;