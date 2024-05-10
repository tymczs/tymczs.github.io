import React, { useState, useEffect, useContext } from 'react';
import Card from "./Card.jsx"
import CardButton from "./CardButton.jsx"
import './Card.css'

function CardList ({ handleCardButtonClick }) {
  const [imageStackValue, setImageStackValue] = useState("/src/visualizations/viz3_1.png");
  const [isLoading, setIsLoading] = useState(true); // Stan ładowania

  useEffect(() => {
    // Symulacja pobierania danych asynchronicznie (zastąp to swoim rzeczywistym kodem pobierania danych)
    setTimeout(() => {
      setImageStackValue("/src/visualizations/viz3_1.png");
      setIsLoading(false);
    }, 500); // Opóźnienie 1 sekunda dla przykładu
  }, []);

  return (
    <>
     <div className="cardList" style={{ backgroundImage: isLoading ? 'none' : `url(${imageStackValue})`, objectFit: 'contain' }}>
     {isLoading && <div>Loading...</div>} {/* Wyświetlanie loadera */}
      <CardButton handleCardButtonClick={handleCardButtonClick}/>
      <Card setImageStackValue={setImageStackValue} />
    </div>
    </>
  )
}
export default CardList
