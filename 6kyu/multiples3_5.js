function solution(number){
  let u = 0;
  // checks for negative numbers
  if (number < 0){
    return 0;
  } else {
    for (let i = 0; i < number; i++) {
      let result = i%3;
      
      // checks if the number is a multiple of 3
      if (result == 0){
        u+=i;
      // checks if the number is a multiple of 5, if not 3
      } else if (result > 0){
        result = i%5;
        // adds and moves onto next number
        if (result == 0){
          u+=i;
        }
      // do nothing and move onto next number
      }
    }
    return u;
  }
}
