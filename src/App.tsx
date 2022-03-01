import React from 'react';
import useTitle from "./hooks/useTitle";

const App = () => {
  const titleUpdater = useTitle('Home');

  const moveTo = (pageName: string) => {
    setTimeout(() => titleUpdater(pageName), 3000);
  }

  return (
    <div className="App">

      <button onClick={() => moveTo('Login')}>Login</button>
    </div>
  );
}

export default App;
