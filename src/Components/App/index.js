import styles from './App.module.css';
import GenerationPicker from '../GenerationPicker';
import ScoreCounter from '../ScoreCounter';
import CardDisplay from '../CardDisplay';
import useGame from '../../CustomHooks/useGame';

function App() {
  const [
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
  ] = useGame();


  return (
    <>
      <header className={styles.header}>
        <div className={styles.title} onClick={() => {if(isStarted){resetGame()}}}>Pokemon Memory Game</div>
      </header>
      <div className={styles.app}>
        {!isStarted && <GenerationPicker data={generationData} onGenChanged={setSelectedGen} selectedGen={selectedGen} isStarted={isStarted} startGame={startGame} getHighscore={getHighscore}/>}
        {isStarted && 
          (
            <div>
              <ScoreCounter currScore={score} remainingScore={remaining} isLoaded={isLoaded}/>
              <CardDisplay buffer={displayList} onClick={clickCard} isGameOver={isGameover} resetGame={resetGame} score={score} highscore={getHighscore(selectedGen)}/>
            </div>
          )
        }
        
      </div>
    </>
      
  );
}

export default App;
