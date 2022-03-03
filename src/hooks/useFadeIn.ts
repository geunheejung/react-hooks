import {useEffect, useRef} from "react";

const useFadeIn = (duration: number = 3) => {
  const element = useRef(null);

  const onFadeIn = (isFadeIn: boolean = true) => {
    const _changeElement = (el: HTMLElement) => {
      el.style.transition = `opacity ${duration}s`;
      el.style.opacity = isFadeIn ? '1' : '0';
    }

    if (element.current !== null) {
      _changeElement(element.current);
    }
  }

  return {
    element,
    onFadeIn
  };
}

export default useFadeIn;