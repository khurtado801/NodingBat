frontTimes = (str, n) => { 
	if (str.length < 3) {
        return str.repeat(n);
    } else {
        let res = str.slice(0, 3);
        return res.repeat(n);
    }
}

console.log(frontTimes("be", 5));