# Pokemon Memory Game
### About
A website made for TheOdinProject "Memory Card" chapter for React. The basic game has the player select a generation and the fetches the data for all the species of pokemon from that generation. The player then has to select the pokemon cards and attempt not to select a card they have previously selected. The project uses Semantic UI for certain stylings, the npm package @brainhubeu/react-carousel for the level select carousel and custom CSS styling used via CSS modules. The project was made without responsiveness in mind and therefore has only been tested on my desktop at 1080p. As much as I would have liked to spent a lot longer on the project to better write the code, make it responsive and test for any bugs, I figured it'd be better to take anything I've learnt from this project and apply to future projects. The biggest thing to take from this project for me has been to plan out upcoming projects in a lot more detail before starting to avoid getting caught up in easily avoidable problems.

## Pitfalls (and solutions)

### Image preloading and custom buffer
One of the big problems faced early on in the project was that I was loading the images upon new cards being loaded. The issue here was since the images could take a while to load, the player could be left with up to 3 seconds of waiting just for the image to show which slowed the game down drastically. To counter this I preloaded the images for the upcoming 4 cards before the player had got to them. This sped up the game slightly but the loading still took long enough to create a decent slow down in the game. To counter this again, I decided to create a buffer type system where 20 cards are loaded upon the start of the game and everytime the player clicks one of the 4 displayed cards, the data for 4 more cards were fetched. Being somewhat new to React I used a state for the buffer and quickly discovered that both enqueuing and popping cards to and from the buffer in the same render didn't work as expected because whichever method came last used an unedited version of that frames state. This led me to a full read up on how React state works and gave me a much better understanding of the problem I was facing. The solution I ended up using was useRef which allows me to access the most current version of the buffer and therefore multiple changes to the buffer can happen within one frame. Using useRef however takes the buffer out of the React pipeline which means that it can't be used as a dependency in a useEffect hook. This was a problem because if the player quickly clicked cards as fast as possible and got lucky enough to empty the buffer, no cards would display. Theoretically updating my display list (4 cards) the second the buffer had cards in again should be easy with useEffect but since a ref can't be used as a dependency this created issues where the useEffect function would see the length of the buffer as 0 despite the buffer being full.

### Level Select Carousel
Todo

## TODO (Time permitted)
- UseEffect cleanup functions for API calls
- Reorganise code to better seperate concerns
- Add reducers to clean up amount of seperate states
- Improve basic styling of site
- Add quit modal when clicking title
- Add react-spring animations for cards entering and leaving screen
- Add react-spring animations for card and level hover
