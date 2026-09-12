
function rateLimit<F extends (...args: any[]) => any>(
  fn: F,
  limit: number,
  interval: number
): (...args: Parameters<F>) => Promise<Awaited<ReturnType<F>>> {
	type Result = Awaited<ReturnType<F>>;  

  let active = 0;
  const queue: Array<() => void> = [];

  function run(
    runThis: ThisParameterType<F>,
    runArgs: Parameters<F>,
    resolve: (value: Result | PromiseLike<Result>) => void,
    reject: (reason: unknown) => void
  ) {
    active++;

    try {
      resolve(fn.apply(runThis, runArgs));
    } catch (e) {
      reject(e);
    } finally {
      setTimeout(() => {
        active--;
        if (queue.length && active < limit) queue.shift()!();
      }, interval);
    }
  }

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    return new Promise((resolve, reject) => {
      if (active < limit) {
        run(this, args, resolve, reject);
      } else {
        queue.push(() => run(this, args, resolve, reject));
      }
    });
  };
}