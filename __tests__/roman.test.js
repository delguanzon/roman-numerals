import RomanNumbers from './../src/roman.js';

describe("RomanNum", () => {

  test('should create a RomanNum object with a current value', () => {
    let romanNum = new RomanNumI(123);
    expect(romanNum.currVal).toEqual(123);
  });
});