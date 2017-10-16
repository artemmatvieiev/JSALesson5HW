/* 1. Создать генератор, который принимает любое число (SN).
  Генератор создаёт итератор, каждый вызов которого возвращает результат 
  умножения числа  SN на предыдущий результат (SN*SN, SN*SN*SN...). 
  Если число получилось больше миллиарда, итератор должен сгенерировать ошибку:
  function* getValue(number) { … } 
  const valuer = getValue(5);
  valuer.next().value;
*/

function* getValue(number) {
  let result = number;
  try {
    while (result*number <= 1000000000) {
      yield result *= number; 
    }
    if (result*number > 1000000000) throw new Error('Value is too big!')
  }
  catch(err) {
    console.error(err.message);
  }
}

/* 2.Создать бесконечный генератор, который должен показывать текущее количество 
  секунд (использовать Date), округленное вниз до десяти:
  function* createSeconds() { … }
  const getSec = createSeconds();
  getSec.next().value;
*/

function* createSeconds() {
  while(true) {
    yield Math.floor(new Date().getSeconds()/10)*10;
  }  
}

/* 3. Используя пример отсюда, подключить библиотеку jQuery и использовать 
библиотечный метод get() вместо fetch. 
Результат работы кода должен быть точно таким же, как и в оригинале.
Прислать на проверку ссылку на свой готовый codepen. */

https://codepen.io/artemmatvieiev/pen/MEzwVN?editors=0010