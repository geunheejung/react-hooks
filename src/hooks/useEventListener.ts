import {useEffect} from "react";

const useEventListener = (type: string | Array<keyof WindowEventMap>, listener: EventListener) => {
  useEffect(() => {
    const isMultipleType = Array.isArray(type);

    const loopListener = (isRemove?: boolean): void => {
      if (!isMultipleType) return;

      type.map(
        _type => window[isRemove ? 'removeEventListener' : 'addEventListener'](_type, listener)
      );
    }

    if (isMultipleType) loopListener();
    else window.addEventListener(type, listener);

    return () => {
      if (isMultipleType) loopListener(true);
      else window.removeEventListener(type, listener);
    }
  }, []);
}

export default useEventListener;
