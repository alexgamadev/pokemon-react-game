import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const GameoverModal = (props) => {
    return (
    <Modal
      onClose={() => props.resetGame(props.score)}
      open={props.isGameOver}
      closeOnEscape={false}
      closeOnDimmerClick={false}
    >
      <Modal.Header>Game Over!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>You got a score of: {props.score}</Header>
          {(props.score > props.highscore) ? 
            (<p>New Highscore!</p>) :
            (<p>You were {props.highscore - props.score} cards off your highscore.</p>)
          }
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Continue"
          labelPosition='right'
          icon='checkmark'
          onClick={() => props.resetGame(props.score)}
          positive
        />
      </Modal.Actions>
    </Modal>
    );
}

export default GameoverModal;