function XO(str){
	let x = 0;
	let o = 0;

	for (let i = 0; i < str.length; i++){
		if (str[i] == "x" || str[i] == "X"){
			x++;
		} else if (str[i] == "o" || str[i] == "O"){
			o++;
		}
	}

	if (x==o){
		return true;
	} else {
		return false;
	}
}
