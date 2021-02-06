const useHighscores = () => {
    const setHighscore = (generation, score) => {
        const oldHighscore = window.localStorage.getItem(generation);
        if(score > oldHighscore) {
            window.localStorage.setItem(generation, score);
        }
    }

    const getHighscore = (generation) => {
        const highscore = window.localStorage.getItem(generation);
        console.log("HIGHSCORE", highscore);
        if(highscore > 0) {
            return highscore;
        } else {
            return 0;
        }
    }

    const clearHighscores = () => {
        window.localStorage.clear();
    }

    return [setHighscore, getHighscore, clearHighscores];
}

export default useHighscores;