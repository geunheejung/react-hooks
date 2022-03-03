import { useState } from "react";
import useEventListener from "./useEventListener";

const useNetwork = (onChange?: (isOnline: boolean) => void) => {
  const [ status, setStatus ] = useState(navigator.onLine);

  const handleChange = () => {
    const { onLine } = navigator;
    if (onChange) onChange(onLine);
    setStatus(onLine);
  };

  useEventListener(['online', 'offline'], handleChange);

  return status;
}

export default useNetwork;