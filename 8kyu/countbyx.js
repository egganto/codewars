function countBy(x, n){
	let z = [];
	let y = 0;

	for (let i = 0; i < n; i++){
		y+=x;
		z.push(y);
	}

	return z;
}
