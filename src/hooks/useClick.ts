import {useEffect, useRef} from "react";

const useClick = <T extends HTMLElement>(onClick: EventListener) => {
  const element = useRef<T>(null);

  useEffect(() => {
    const { current } = element;
    if (!current) return;


    current.addEventListener('click', onClick);
    return () => current.removeEventListener('click', onClick);


  }, []); // dependency를 빈 값으로 설정해주지 않으면, 매 상태 업데이트때마다 event가 등록, 해주면 didMount시에만.
  return element;
}

export default useClick;
