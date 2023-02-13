function squareDigits(num){
  let digit = num.toString().split(``);
  let output = [];
  
  for (let i = 0; i < digit.length; i++){
    output.push(Math.pow(Number(digit[i]), 2));
  }  
  
  return Number(output.join(``));
}
