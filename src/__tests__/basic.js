// test(description, work);
// import по стандарту commonJS
// const { calculateTotal } = require('../src/calculate.js')

// Через import/export
import { calculateTotal, calculateTotal2 } from '../calculate.js';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('basic test 2', () => {
  const result = 2;
  expect(result).toBe(2);
});

test('calculateTotal old version of function', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

test('calculateTotal without Discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal2(list);
  expect(result).toBe(2500);
});

test('calculateTotal with Discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 401,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal2(list, true);
  // expect(result).toBe(2230.173); сравнение на точное значение

  expect(result).toBeCloseTo(2230.173); // сравнение с приближенным значением
});
