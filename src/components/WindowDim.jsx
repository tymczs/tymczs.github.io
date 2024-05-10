import React, { useState, useEffect, createContext, useContext } from 'react';

const WindowDimContext = createContext();

// useContext aby móc wszędzie się odwołać
export const useWindowDim = () => useContext(WindowDimContext);

function WindowDim({children}) {
    const [width, setWidth] = useState(window.innerWidth); //useState zapisuje pozycje
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    // obiekt zmiennych CSS
    const cssVariables = {
        '--win-width': `${width}px`,
        '--win-height': `${height}px`,
    };

    return (
        <WindowDimContext.Provider value={{ width, height, cssVariables }}>
            {children}
        </WindowDimContext.Provider>
    );
}

export default WindowDim


    // const { width: windowWidth, height: windowHeight } = useWindowDim();
    {/* <h1>Szerokość monitora: {windowWidth}</h1>
    <h1>Wysokość monitora: {windowHeight}</h1> */}