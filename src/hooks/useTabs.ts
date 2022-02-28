import {useState} from "react";

interface ContentInterface {
  tab: string
  content: string
}

export type ContentsType = Array<ContentInterface>;

const useTabs = (initalTab: number, allTabs: ContentsType) => {
  const [ currentIndex, setCurrentIndex ] = useState(initalTab);

  const changeCurrentIndex = (index: number) => {
    if (currentIndex === index) return;
    setCurrentIndex(index);
  }

  return {
    currentItem: allTabs[currentIndex],
    changeCurrentIndex
  }
}

export default useTabs;