import { useState, useRef, useCallback } from "react";
import { shuffleArray } from '../Utils/ArrayUtils';

const useGameTracker = () => {
    const unSelected = useRef([]);
    const selected = useRef([]);
    const [score, setScore] = useState(0);
    const [remaining, setRemaining] = useState(0);

    const addSelected = (cards) => {
        let scoreDiff = 0;
        let remainDiff = 0;

        cards.forEach((card) => {
            if(!card.selected) {
                scoreDiff++;
                remainDiff++;
                card.selected = true;
            }
            
            selected.current.push(card);
        });

        setScore(score => score + scoreDiff);
        setRemaining(remaining => remaining - remainDiff);
    }

    const percentageScore = () => {
        return (score/remaining) * 100;
    }

    const initUnselected = useCallback((speciesArr) => {
        let temp = speciesArr.map((species) => ({name: species, selected: false}));
        unSelected.current = [...temp];
        setRemaining(speciesArr.length);
        setScore(0);
    }, []);

    const shiftSelected = (quantity) => {
        let temp = [...selected.current];
        shuffleArray(temp);
        const newCards = temp.splice(0, quantity);

        selected.current = temp;
        
        return newCards;
    }

    const shiftUnselected = useCallback((quantity) => {
        let temp = [...unSelected.current];
        shuffleArray(temp);
        const newCards = temp.splice(0, quantity);
        unSelected.current = temp;

        return newCards;
    }, []);

    const addUnselected = (cards) => {
        cards.forEach((card) => unSelected.current.push(card));
    }

    const resetTrackers = () => {
        selected.current = [];
        unSelected.current = [];
        setScore(0);
        setRemaining(0);
    }

    //Load unSelected pokemon from species list
    //Set remaining to unSelected length
    //Load 20 cards from unSelected to the buffer
    //Everytime a card is moved from the buffer to Selected, add 1 to score
    //Buffer adds remaining cards from 

    return [
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
    ];
}

export default useGameTracker;