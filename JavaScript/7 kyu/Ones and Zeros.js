const binaryArrayToNumber = arr => {
    return Number('0b' + arr.join(''))
};

console.log(binaryArrayToNumber([0,1,1,0]))