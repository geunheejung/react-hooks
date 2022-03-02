const usePreventLeave = () => {
  const listener = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  }

  // API 요청 후 닫아도 되는지 안되는지 여부
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener)
  }

  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener)
  }

  return {
    protect: enablePrevent,
    unprotect: disablePrevent
  }
}

export default usePreventLeave;