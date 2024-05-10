import React, {useState, useContext, useEffect} from 'react';


function appearText(){
    const [showText,setShowText] = useState(false);
    const [text,setText] = useState("");
    return (
        <>
            <div style={{width:'600px', height:'300px', backgroundColor:'black'}}>
            <button 
            onClick={() => {
                setShowText(!showText);
            }}>Show text</button>
            {showText && 
            <>
                <input onChange={(event) => {
                setText(event.target.value)
                }} />
                <h1>{text}</h1>
            </>
            }
            </div>
        </>
    )
};
export default appearText;