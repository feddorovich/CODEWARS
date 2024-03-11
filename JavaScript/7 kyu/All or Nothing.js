function possiblyPerfect(key, answers) {
    const resultArr = []

    for (let i = 0; i < key.length; i++) {
        if (key[i] === answers[i]) {
            resultArr.push(true)
        } else if (key[i] === "_") {
            continue
        } else {
            resultArr.push(false)
        }
    }

    let isEqual = true

    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[0] !== resultArr[i]) {
            isEqual = false
            break
        }
    }

    return isEqual
}

console.log(possiblyPerfect(["A", "_", "C", "_", "B"], ["A", "D", "C", "E", "B"]))
console.log(possiblyPerfect(["B", "_", "B"], ["B", "D", "C"]))
console.log(possiblyPerfect(["T", "_", "F", "F", "F"], ["F", "F", "T", "T", "T"]))