import React, { useState, createContext, useEffect } from 'react';
import CardList from "./components/CardList.jsx"
import './components/Card.css';
import AppearText from './components/AppearText.jsx'; // dodawana tresc
import ShowKeyClicked from "./components/ShowKeyClicked.jsx"

const SwipeDirectionContext = createContext(null); //CREATE CONTEXT
function App() {
  const [swipeDirection, setSwipeDirection] = useState(null); //STATE kierunku
  
  const handleCardButtonClick = (direction) => { //przekazana VAR do buttona
    setSwipeDirection(direction); 
  };

  useEffect(() => {
    setSwipeDirection("gowno");
  }, [swipeDirection]);

  return (
    <SwipeDirectionContext.Provider value={swipeDirection}>
      <div className='cardPage'>
          <CardList handleCardButtonClick={handleCardButtonClick} />
      </div>
      {/* <AppearText />
      <ShowKeyClicked /> */}
    </SwipeDirectionContext.Provider>
  );
}
export {SwipeDirectionContext}
export default App
