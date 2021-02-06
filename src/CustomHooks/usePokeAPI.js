import {useState, useEffect} from 'react';

const usePokeAPI = (endpoint, id = null) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}/${id ? id + "/" : ""}`);
                if(response.ok) {
                    const dataResponse = await response?.json();
                    setData(dataResponse);
                    setIsLoading(false);
                } else {
                    throw Error("404 - Couldn't find data or connect to API")
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();

        // eslint-disable-next-line
    }, []);

    return [data, isLoading];
}

export default usePokeAPI;