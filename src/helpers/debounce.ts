type DebounceFunction<T extends (...args: any[]) => any> = (
  func: T,
  delay: number
) => T;

const debounce: DebounceFunction<(...args: any[]) => void> = (func, delay) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as T;
};

export default debounce;
