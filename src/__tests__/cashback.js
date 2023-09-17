import calculateCashback from '../cashback';

test('cashback at sum: 500', () => {
  const result = calculateCashback(500);
  expect(result).toBe(0);
});

// Список данных для проверки (массив массивов)
// const dataList = [
//     ['gold', 100000, 5000],
//     ['silver', 10000, 200],
//     ['regular', 1000, 10],
//     ['no', 500, 0],
// ];

// Создаем test.each котоаря возвращает функцию, которую и будем запускать
// const handler = test.each(dataList);

// prefix - описание каждого из тестов
// второй параметр - функция с параметрами
// параметры все указываем и называем как хотим
// prefix - емкая функция для отличия тестов с различными значениями
// %s - параметр в виде строки, %i - в виде числа
// в каком поаядке указали их, в таком порядке и будет префикс брать параметры

// handler('testing cashback function with %s status and %i amount', (status, amount, expected) => {
//     const result = calculateCashback(amount);

//     expect(result).toBe(expected);
// });

// А теперь все в одном месте
// Неиспользованные аргументы обычно заменяют на
// символ нижнего подчеркивания (если не используется в расчетах)
test.each([
  ['gold', 100000, 5000],
  ['silver', 10000, 200],
  ['regular', 1000, 10],
  ['no', 500, 0],
])('testing cashback function with %s status and %i amount', (_, amount, expected) => {
  const result = calculateCashback(amount);

  expect(result).toBe(expected);
});
