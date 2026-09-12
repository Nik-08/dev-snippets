/* ============================================================
   ЗАДАЧА: retry(fn, attempts)

   fn — функция, возвращающая промис или просто результат.
   Вызвать её; если упала — сразу попробовать снова,
   всего не больше attempts попыток.
   Вернуть результат первой успешной попытки.
   Если все провалились — реджект последней ошибкой.
   ============================================================ */


async function retry<T>(fn: () =>  T | Promise<T>, attempts: number, delay: number, factor = 2): Promise<T> {
  let errResult;
  
  for (let i = 0; i < attempts; i++) {
    try {
      if(i > 0) {
        const base = delay * factor ** (i - 1)
        await new Promise((resolve) => setTimeout(resolve, base * (0.5 + Math.random())))
      }
			return await fn();
    } catch(e) {
      errResult = e;
    }
  }
  
  throw errResult
}