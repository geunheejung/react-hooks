import {useEffect} from "react";

const useBeforeLeave = (onBefore: Function) => {
  const handle = (e: MouseEvent) => {
    if (e.clientY <= 0) onBefore();
  }

  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
}

export default useBeforeLeave;