function spinWords(string){
    let arr = string.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            result.push(arr[i].split('').reverse().join(''))
        } else {
            result.push(arr[i])
        }
    }
    return result.join(' ')
}

console.log(spinWords("Hey fellow warriors"))