import React from 'react';
import useFadeIn from './hooks/useFadeIn';

const App = () => {
  const { element, onFadeIn } = useFadeIn();

  return (
    <div className="App">
      <h1 ref={element} style={{ opacity: 0 }}>Hello</h1>

      <ol>
        <button onClick={() => onFadeIn()}>
          Fade In
        </button>
        <button onClick={() => onFadeIn(false)}>
          Fade Out
        </button>
      </ol>
    </div>
  );
}

export default App;
