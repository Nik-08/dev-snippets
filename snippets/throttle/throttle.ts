function throttle<F extends (...args: any[]) => void>(fn: F, delay: number) {
  let isThrottled = false;
  let savedArgs: Parameters<F> | null = null;
  let savedThis: ThisParameterType<F>;

  function wrapper(this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
      }
    }, delay);
  }

  return wrapper;
}