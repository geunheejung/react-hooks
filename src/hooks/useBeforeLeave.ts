import useEventListener from "./useEventListener";

const useBeforeLeave = (onBefore: Function) => {
  const handle = (e: MouseEvent) => {
    if (e.clientY <= 0) onBefore();
  }

  useEventListener('mouseleave', handle)
}

export default useBeforeLeave;