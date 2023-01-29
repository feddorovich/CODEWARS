function squareDigits(num) {
    let digit = String(num).split('').map(el => el * el).join('')
    return parseInt(digit)
}

console.log(squareDigits(123))

/*
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}

OR

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
 */