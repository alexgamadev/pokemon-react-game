import React from 'react';
import styles from './ScoreCounter.module.css';
import { Statistic } from 'semantic-ui-react';

const ScoreCounter = (props) => {

    return (
        <div className={styles.container}>
            {props.isLoaded && ( 
                <>
                    <Statistic label='Score' value={props.currScore} />
                    <Statistic label='Remaining' value={props.remainingScore} />
                </>
            )}
        </div>
        
    );
}

export default ScoreCounter;