import React from 'react';
import styles from './GenerationSelect.module.css';
import regionImages from '../../Assets/Regions';
import { Card, Image, Button } from 'semantic-ui-react'

const GenerationSelect = (props) => {
    return (
        <Card className={`${styles.margin} ${styles.card}`} raised={true}>
            <Image src={regionImages[props.generation?.id - 1]} wrapped ui={false} alt={props.generation?.main_region.name}/>
            <Card.Content textAlign="left">
                <h3>Highest score: {props.highscore}</h3>
                
            </Card.Content>
            <Card.Content extra>
                {!props.isStarted && (<Button onClick={props.startGame} positive>Start Game</Button>)}
            </Card.Content>
        </Card>
    );
}

export default GenerationSelect;