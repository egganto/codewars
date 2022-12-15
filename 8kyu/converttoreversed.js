function digitize(n) {
  let o = n.toString();
  let reverse = []; 
  
  for (let i = o.length-1; i >= 0; i--){
    reverse.push(parseInt(o.charAt(i)));
  }
  return reverse;
}
