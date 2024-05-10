import React, { useContext, useEffect, useState, useRef } from 'react';
import viz1_1 from "../visualizations/viz1_1.png"
import viz2_1 from "../visualizations/viz2_1.png"
import viz3_1 from "../visualizations/viz3_1.png"
import viz4_1 from "../visualizations/viz4_1.png"
import viz5_1 from "../visualizations/viz5_1.png"
import viz1_2 from "../visualizations/viz1_2.png"
import viz2_2 from "../visualizations/viz2_2.png"
import viz3_2 from "../visualizations/viz3_2.png"
import viz4_2 from "../visualizations/viz4_2.png"
import viz5_2 from "../visualizations/viz5_2.png"
import viz1_3 from "../visualizations/viz1_3.png"
import viz2_3 from "../visualizations/viz2_3.png"
import viz3_3 from "../visualizations/viz3_3.png"
import viz4_3 from "../visualizations/viz4_3.png"
import viz5_3 from "../visualizations/viz5_3.png"
import './Card.css';
import { SwipeDirectionContext } from '../App'; // Zaimportuj kontekst 

function Card({ setImageStackValue }) {
  let stackCards = [[viz1_1,viz2_1,viz3_1,viz4_1,viz5_1],[viz1_2,viz2_2,viz3_2,viz4_2,viz5_2],[viz1_3,viz2_3,viz3_3,viz4_3,viz5_3]] // array type jako arraye cards
  const [imageStack, setImageStack] = useState(stackCards)
  const swipeDirection = useContext(SwipeDirectionContext);
  const imageRef = useRef(null);
  
  useEffect(() => {
    if (swipeDirection) {
      let updatedImageCards = [...imageStack];
      if (swipeDirection === "right") {
        updatedImageCards[0].push(updatedImageCards[0].shift()); //z poczatku na koniec
        updatedImageCards[1].push(updatedImageCards[1].shift());
        updatedImageCards[2].push(updatedImageCards[2].shift());
        setImageStack(updatedImageCards);
      }
      else if (swipeDirection === "left") {
        updatedImageCards[0].unshift(updatedImageCards[0].pop()); //z konca na poczatek
        updatedImageCards[1].unshift(updatedImageCards[1].pop());
        updatedImageCards[2].unshift(updatedImageCards[2].pop());
        setImageStack(updatedImageCards);
      }
      else if (swipeDirection === "up") {
        updatedImageCards.push(updatedImageCards.shift());
        setImageStack(updatedImageCards);
      }
      else if (swipeDirection === "down") {
        updatedImageCards.unshift(updatedImageCards.pop());
        setImageStack(updatedImageCards);
      }
      console.log(imageStack[0][2]);
    }
  }, [swipeDirection]);

  useEffect(() => {
    if (imageRef.current) {
      setImageStackValue(imageStack[0][2]);
    }
  }, [imageStack]);

  return (
      <>
      {imageStack[0].map((path, index) => (
        <div key={index} className={`card card-${index + 1}`} id={`card${index + 1}`}>
          <img key={index} src={path} ref={index === 2 ? imageRef : null}/>
        </div>
      ))}
    </>
  )
}
export default Card





