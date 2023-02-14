function fakeBin(x) {
    let arr = Array.from(String(x))
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            result.push(1)
        } else {
            result.push(0)
        }
    }
    return result.join('')
}

console.log(fakeBin(45385593107843568))