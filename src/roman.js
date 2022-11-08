export default function RomanNum(number){
  this.currVal = number;
  return this.currVal;  
}

RomanNum.prototype.toRoman = function (){
  let romanNumeral = [];
  if(this.currVal <= 3){
    for(let i = 1; i <=this.currVal; i++)
    {
      romanNumeral.push("I");
    } 
  } 
  if ((this.currVal) >= 5 && (this.currVal <= 8)){
    if((this.currVal) % 5 === 0)
    {
      romanNumeral.push("V");
    }    
    if((this.currVal) % 5 === 1)
    {
      romanNumeral.push("VI");
    } 
  }

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
  return romanNumeral.join("");
};

