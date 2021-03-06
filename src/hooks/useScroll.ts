import { useState } from "react";
import useEventListener from "./useEventListener";

const useScroll = () => {
  const [ state, setState ] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    const { scrollX, scrollY } = window;
    setState({
      x: scrollX,
      y: scrollY
    });
  }

  useEventListener('scroll', onScroll);

  return state;
}

export default useScroll;