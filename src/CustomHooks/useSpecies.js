import { useCallback, useState } from "react";

const useSpecies = () => {
    const [species, setSpecies] = useState(null);

    const refreshSpecies = useCallback((generationData, selectedGen) => {
        if(generationData) {
            const speciesArr = [];
            generationData[selectedGen-1]?.pokemon_species.map((species) => speciesArr.push(species.name));
            setSpecies(speciesArr);
        }
    }, []);

    const loadSpeciesData = async (name) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
            if(response.ok) {
                return await response?.json();
            } else {
                throw Error("404 - Couldn't find data or connect to API")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return [species, refreshSpecies, loadSpeciesData];
}

export default useSpecies;