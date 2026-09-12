/* ============================================================
   ЗАДАЧА: debounce(fn, wait)

   Вернуть новую функцию — «отложенную» версию fn.

   1. Вызов отложенной функции не выполняет fn сразу, а
      планирует её через wait миллисекунд.
   2. Каждый новый вызов, пришедший раньше, чем истекли wait,
      ОТМЕНЯЕТ предыдущий план и отсчитывает wait заново.
      Итог: fn выполняется один раз — через wait после
      последнего вызова в серии.
   3. fn получает аргументы ПОСЛЕДНЕГО вызова.
   4. Контекст вызова (this) должен сохраняться.
   5. Бонус: у возвращённой функции есть метод .cancel(),
      отменяющий запланированный вызов, если он ещё не
      состоялся.
   ============================================================ */

const debounce = <F extends (...args: any[]) => void>(fn: F, delay: number): (...args: Parameters<F>) => void  => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  
	function debounced(this: ThisParameterType<F>, ...args: Parameters<F>) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
  
  debounced.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
  };

  return debounced
 
}