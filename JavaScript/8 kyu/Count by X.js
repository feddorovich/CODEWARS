function countBy(x, n) {
    let z = [x];
    for (let i = 1; i < n; i++) {
        z.push(x+z[z.length - 1])
    }
    return z;
}


console.log(countBy(2, 5))