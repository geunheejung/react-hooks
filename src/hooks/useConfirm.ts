const useConfirm = (message: string, callback: { confirm: Function, rejection: Function }) => {
  const confirmAction = () => {
    const { confirm, rejection } = callback;
    if (window.confirm(message)) {
      confirm();
    } else {
      rejection();
    }
  }

  return confirmAction;
}

export default useConfirm;