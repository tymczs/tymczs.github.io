import react from 'react';

function CardButton({ handleCardButtonClick }) {

    return (
        <>
            <div className="cardButton">
                <button 
                    type='button' 
                    className='cardBtn'
                    onClick={() => handleCardButtonClick("left")}  
                > 
                prev 
                </button>
                <button 
                    type='button' 
                    className='cardBtn'
                    onClick={() => handleCardButtonClick("right")}
                > 
                next 
                </button>
            </div>
            <div className='typeButton'>
                <button
                    type='button' 
                    className='typeBtn'
                    onClick={() => handleCardButtonClick("up")}  
                >
                    UP
                </button>
                <button
                    type='button' 
                    className='typeBtn'
                    onClick={() => handleCardButtonClick("down")}  
                >
                    DOWN
                </button>
            </div>
        </>
    )
}

export default CardButton
