import RomanNum from './../src/roman.js';

describe("RomanNum", () => {

  test('should create a RomanNum object with a current value', () => {
    let romanNum = new RomanNum(123);
    expect(romanNum.currVal).toEqual(123);
  });

  test('should return "I" if the value passed is 1', () => {
    let num = new RomanNum(1);
    expect(num.toRoman()).toEqual('I');
  });

});
