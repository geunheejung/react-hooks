import React, {SyntheticEvent} from 'react';
import useClick from './hooks/useClick';

const App = () => {
  const handleClick = (e: CustomEvent<PointerEvent>) => {
    console.log(e);
  }

  const title = useClick<HTMLHeadingElement>(handleClick);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
