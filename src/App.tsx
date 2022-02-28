import React from 'react';
import useTabs, { ContentsType } from './hooks/useTabs';

const App = () => {
  const content: ContentsType = [
    {
      tab: 'Section 1',
      content: `I'm the content of the Section 1`
    },
    {
      tab: 'Section 2',
      content: `I'm the content of the Section 2`
    }
  ]

  const tabs = useTabs(0, content);

  const changeTab = (index: number) => {
    tabs.changeCurrentIndex(index);
  }

  return (
    <div className="App">
      {content.map((section, index) => (
        <button
          onClick={() => changeTab(index)}
        >
          {section.tab}
        </button>
      ))}
      <ol>
        <h1>{tabs.currentItem.tab}</h1>
        <p>{tabs.currentItem.content}</p>
      </ol>
    </div>
  );
}

export default App;
