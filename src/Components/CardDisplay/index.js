import PokemonCard from '../PokemonCard';
import styles from './CardDisplay.module.css';
import GameoverModal from '../GameoverModal';
import { Dimmer, Loader } from 'semantic-ui-react'

const CardDisplay = (props) => {

    const onClickCard = (e, card) => {
        props.onClick(card);
    }

    return (
        <>
            <div className={styles.displayContainer}>
                <div className={styles.cardsDisplay}>
                    {props.buffer?.length > 0 ?
                        props.buffer.map((card) => <PokemonCard key={card.name} card={card} onClick={onClickCard}/>) :
                        (<Dimmer active>
                            <Loader />
                         </Dimmer>)
                    }
                </div>
            </div>
            <GameoverModal isGameOver={props.isGameOver} resetGame={props.resetGame} score={props.score} highscore={props.highscore}/>
        </>
    );
}
export default CardDisplay;