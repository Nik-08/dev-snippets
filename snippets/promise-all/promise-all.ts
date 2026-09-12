

/* ============================================================
   ЗАДАЧА: promiseAll — свой аналог Promise.all

   Реализуй функцию promiseAll(items), не используя
   Promise.all, Promise.allSettled и Promise.race.

   1. items — массив, элементы могут быть промисами
      или обычными значениями.
   2. Возвращает промис, который резолвится массивом
      результатов В ИСХОДНОМ ПОРЯДКЕ — независимо от того,
      кто завершился раньше.
   3. Если любой элемент реджектится — возвращённый промис
      реджектится с этой же причиной, сразу при первом отказе,
      не дожидаясь остальных.
   4. Пустой массив → резолв с [].
   5. Все промисы стартуют параллельно, а не по очереди.
   ============================================================ */

function promiseAll<T>(items: (T | Promise<T>)[]): Promise<T[]> {
	return new Promise((resolve, reject) => {  
    const result: T[] = [];
    let count = 0;
		if(items.length === 0) return resolve([]);
 
    items.forEach((item, index) => {
      Promise.resolve(item).then(value => {
        result[index] = value;
        count++;
     
        if(count === items.length) return resolve(result)
      }, reject)
    });
  })
};