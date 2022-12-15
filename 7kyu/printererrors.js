function printerError(s) {
  let colors = [`n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
  let error = 0;
  
  for (let i = 0; i < s.length; i++){
    for (let j = 0; j < colors.length; j++){
      if (s.charAt(i) == colors[j]){
        error++;
      }
    }
  }
  return `${error}/${s.length}`;
}
