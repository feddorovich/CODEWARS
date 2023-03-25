function maskify(cc) {
    arr = cc.split('').reverse()
    if (cc === '1') {
        return '1'
    }
    result = []
    for (let i = 0; i < 4; i++) {
        result.push(arr[i])
    }
    for (let i = 4; i < arr.length; i++) {
        result.push('#')
    }
    return result.reverse().join('')
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))

/*
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/