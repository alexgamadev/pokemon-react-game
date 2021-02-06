import {useEffect, useState} from 'react';
import usePokeAPI from './usePokeAPI';

const useGenerations = () => {
    const [generationData, setGenerationData] = useState(null);
    const [selectedGen, setSelectedGen] = useState(null);
    const [data, gensLoading] = usePokeAPI('generation');

    //Fetch generation data on mount
    useEffect(() => {
        const initGenerations = async (gens) => {
            const genData = [];
            await Promise.all(gens?.results?.map(async (gen) => {
                genData.push(await loadGenerationData(gen.url));
            }));
    
            setSelectedGen(1);
            genData.sort((a, b) => a.id - b.id);
            setGenerationData(genData);
        }
        
        if(!gensLoading) {
            initGenerations(data);
        }
    }, [gensLoading, data]);

    const loadGenerationData = async (url) => {
        try {
            const response = await fetch(url);
            if(response.ok) {
                const data = await response?.json();
                return data;
            } else {
                throw Error("Can't get generation data");
            }
        } catch(error) {
            return error;
        }
    }
    
    return [setSelectedGen, selectedGen, generationData];
}

export default useGenerations;