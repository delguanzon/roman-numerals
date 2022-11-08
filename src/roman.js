export default function RomanNum(number){
  this.currVal = number;
  return this.currVal;  
}

RomanNum.prototype.toRoman = function (){
  if(this.currVal === 1){
    return 'I';
  }
  if(this.currVal === 5) {
    return 'V';
  }
  if(this.currVal === 10) {
    return 'X';
  }
  if(this.currVal === 50) {
    return 'L';
  }
  return 0;
};
