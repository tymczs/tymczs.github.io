import { useCallback, useEffect } from 'react';

export default function ShowKeyClicked() {
  // handle what happens on key press
  const handleKeyPress = useCallback((event) => {
    console.log(`Key pressed: ${event.key}`);
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

