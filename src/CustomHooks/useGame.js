import { useCallback, useEffect, useState } from 'react';
import { partition, shuffleArray } from '../Utils/ArrayUtils';
import useCardBuffer from './useCardBuffer';
import useSpecies from './useSpecies';
import useGenerations from './useGenerations';
import useCards from './useCards';
import useGameTracker from './useGameTracker';
import useHighscores from './useHighscores';

const BUFFER_SIZE = 20;

const useGame = () => {
    //Custom "hooks"
    const [setSelectedGen, selectedGen, generationData] = useGenerations();
    const [speciesList, refreshSpecies, loadSpeciesData] = useSpecies();
    const [queueCards, shiftCards, buffer] = useCardBuffer();
    const [loadCards] = useCards();
    const [setHighscore, getHighscore] = useHighscores();
     //Change to use reducer if have time
     const [
        unSelected,
        selected,
        initUnselected,
        addUnselected,
        addSelected,
        shiftUnselected,
        shiftSelected,
        score,
        remaining,
        percentageScore,
        resetTrackers,
    ] = useGameTracker();

    //Change to use reducer if have time
    const [isLoaded, setIsLoaded] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [displayList, setDisplayList] = useState([]);
    const [isGameover, setGameover] = useState(false);

    const initBuffer = useCallback(async (newCards) => {
        queueCards(await loadCards(newCards, loadSpeciesData));
        setIsLoaded(true);
        setIsProcessing(false);
    }, [loadCards, loadSpeciesData, queueCards]);

    //Initialise Unselected
    useEffect(() => {
        if(speciesList?.length > 0) {
            initUnselected(speciesList);
        }
    }, [speciesList, initUnselected]);

    //Initialise card buffer
    useEffect(() => {
        if(isStarted && !isLoaded && !isProcessing) {
            setIsProcessing(true);
            if(unSelected?.current.length >= BUFFER_SIZE) {
                const newCards = shiftUnselected(20);
                (async () => {
                    await initBuffer(newCards);
                })();
            } else {
                setIsProcessing(false);
            }
        }    
    }, [unSelected, isStarted, isLoaded, isProcessing, initBuffer, shiftUnselected]);

    //Update display list
    useEffect(() => {
        if(isStarted && isLoaded && displayList?.length <= 0) {
            
            //Load display list
            setDisplayList(shiftCards(4));

            //Load new elements from unselected to buffer
            if(displayList?.length >= 4)
            {
                const newCards = shiftUnselected(4);
                queueLoadedCards(newCards);
            }
            
        }
    }, [isStarted, isLoaded, shiftCards, shiftUnselected, queueCards, displayList, loadSpeciesData]);

    const startGame = () => {
        buffer.current = [];
        setIsStarted(true);
        refreshSpecies(generationData, selectedGen);
    }

    const resetGame = (score = null) => {
        //Clear buffer
        buffer.current = [];
        //Clear unselected, selected, score and remaining
        resetTrackers();
        //Clear display list
        setDisplayList([]);
        //Set isProcessing, isStarted abd isLoaded to false
        setIsLoaded(false);
        setIsProcessing(false);
        setIsStarted(false);
        setGameover(false);
        if(score != null) {
            setHighscore(selectedGen, score);
        }    
    }

    const queueLoadedCards = async (newCards) => {
        const cards = await loadCards(newCards, loadSpeciesData);
        if(isStarted) {
            queueCards(cards);
        }
    }

    const clickCard = (card) => {
        //Shift 4 cards off buffer
        const shiftedCards = displayList;

        //Add non selected cards back to unselected
        const [newUnselect, newSelect] = partition(shiftedCards, (shiftCard => shiftCard.species !== card.species && shiftCard.selected !== true));

        //Check for gameover
        if(card.selected) {
            //resetGame();
            setGameover(true);
        } else {
            addSelected(newSelect.map((card) => ({name: card.species, selected: card.selected})));
            addUnselected(newUnselect.map((card) => ({name: card.species, selected: false})));
            setDisplayList(shiftCards(4));

            //Load new elements from unselected to buffer
            let newCards = [];
            if(selected?.current.length > 0) {
                newCards = shiftUnselected(3);
                newCards.push(...shiftSelected(1));
            } else {
                newCards = shiftUnselected(4);
            }

            shuffleArray(newCards);
            
            queueLoadedCards(newCards);
        }
    }

    return [
        score,
        remaining,
        setSelectedGen,
        selectedGen,
        generationData,
        isLoaded,
        clickCard,
        displayList,
        startGame,
        isStarted,
        isGameover,
        resetGame,
        getHighscore,
    ];
}

export default useGame;