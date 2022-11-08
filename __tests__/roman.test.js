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

  test('should return "V" if the value passed is 5', () => {
    let num = new RomanNum(5);
    expect(num.toRoman()).toEqual('V');
  });
  
  test('should return "X" if the value passed is 10', () => {
    let num = new RomanNum(10);
    expect(num.toRoman()).toEqual('X');
  });

  test('should return "L" if the value passed is 50', () => {
    let num = new RomanNum(50);
    expect(num.toRoman()).toEqual('L');
  });

  test('should return "C" if the value passed is 100', () => {
    let num = new RomanNum(100);
    expect(num.toRoman()).toEqual('C');
  });

  test('should return "D" if the value passed is 500', () => {
    let num = new RomanNum(500);
    expect(num.toRoman()).toEqual('D');
  });

  test('should return "M" if the value passed is 1000', () => {
    let num = new RomanNum(1000);
    expect(num.toRoman()).toEqual('M');
  });

  test('should return II if the value is 2', () => {
    let num = new RomanNum(2);
    expect(num.toRoman()).toEqual('II');
  });
});
