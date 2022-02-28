import React, { ChangeEvent, useState } from 'react';
import useInput, { vaildates } from './hooks/useInput';

const App = () => {
  const name = useInput('Mr.', vaildates.maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        {...name}
      />
    </div>
  );
}

export default App;
