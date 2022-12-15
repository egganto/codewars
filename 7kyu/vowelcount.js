function getCount(str) {
	const vowels = [`a`, `i`, `u`, `e`, `o`];
  let count = 0;
  
  for (let i = 0; i <= str.length; i++){
		for (let j = 0; j <= 4; j++){
			if (str.charAt(i) === vowels[j]){
				count++;
			}
		}
	}

		return count;
}
