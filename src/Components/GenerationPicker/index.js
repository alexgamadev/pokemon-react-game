import React from 'react';
import styles from './GenerationPicker.module.css';
import GenerationSelect from '../GenerationSelect/index.js';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const GenerationPicker = (props) => {
    const genSelected = (id) => {
        props.onGenChanged(id);
    }

    return (
        <Carousel
            slidesPerPage={4}
            clickToChange
            centered
            onChange={e => genSelected(e+1)}
        >
            {props.data?.map((generation, index) => <GenerationSelect 
            key={generation.name} 
            generation={generation} 
            onClicked={genSelected} 
            isStarted={props.isStarted} 
            startGame={props.startGame} 
            highscore={props.getHighscore(generation.id)}/>)
            }
        </Carousel>
    );
}

export default GenerationPicker;