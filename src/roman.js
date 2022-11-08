export default function RomanNum(number){
  this.currVal = number;
  return this.currVal;  
}

RomanNum.prototype.toRoman = function (){
  if(this.currVal === 1){
    return 'I';
  }
  return 0;
};