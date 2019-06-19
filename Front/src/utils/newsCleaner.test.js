/* eslint-disable */
import { cleanDates } from './newsCleaner';

// Date example from a JSON received by WordPress REST API
const date = '2019-04-13T22:25:56';
// What result we want
const date_we_want = { year: '2019', month: '04', day: '13' };
// See the return value
console.log(cleanDates(date));

describe('cleanDates', () => {

  test('Is a function', () => {
    expect(typeof cleanDates).toBe('function');
  });

  test('Return an object', () => {
    expect(typeof cleanDates(date)).toBe('object');
  });

  test('Return an object with three string properties', () => {
    expect(cleanDates(date)).toMatchObject({
      year: expect.any(String),
      month: expect.any(String),
      day: expect.any(String),
    });
  });

  test('Return same properties that the expected result', () => {
    expect(cleanDates(date)).toEqual(date_we_want);
  });

});
