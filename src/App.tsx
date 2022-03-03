import React from 'react';
import useNetwork from './hooks/useNetwork';

const App = () => {
  const onLine = useNetwork();

  return (
    <div className="App">
      <h1>{onLine ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default App;
