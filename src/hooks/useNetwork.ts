import {useEffect, useState} from "react";

const useNetwork = (onChange?: Function) => {
  const [ status, setStatus ] = useState(navigator.onLine);

  const handleChange = () => {
    const { onLine } = navigator;
    if (onChange) onChange(onLine);
    setStatus(onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    }
  });

  return status;
}

export default useNetwork;