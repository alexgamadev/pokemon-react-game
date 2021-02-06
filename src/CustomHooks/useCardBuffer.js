import {useRef} from 'react';

const useCardBuffer = () => {
    const buffer = useRef([]);

    const queueCards = (cards) => {
      console.log("Queue", cards);
      cards.forEach((card) => {
        buffer.current.push(card);
      })
    }

    const shiftCards = (quantity) => {
      if(buffer.length < quantity) {
        return null;
      }

      return buffer.current.splice(0, quantity);
    }
    
    return [queueCards, shiftCards, buffer];
}

export default useCardBuffer;