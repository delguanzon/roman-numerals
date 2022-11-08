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
  if(this.currVal === 100) {
    return 'C';
  }
  if(this.currVal === 500) {
    return 'D';
  }
  if(this.currVal === 1000) {
    return 'M';
  }
  return 0;
};
