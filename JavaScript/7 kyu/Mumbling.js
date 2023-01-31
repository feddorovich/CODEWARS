function accum(s) {
    let arr = s.toLowerCase().split('');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].toUpperCase()
        for (let j = i; j > 0; j--) {
            result += arr[i].toLowerCase()
        }
        if (i < arr.length - 1) {
            result += '-'
        }
    }
    return result
}

console.log(accum('abc'))

/*
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
 */