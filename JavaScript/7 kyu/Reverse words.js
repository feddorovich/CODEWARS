function reverseWords(str) {
    str = str.split(' ')
    let result = []
    for (let i = 0; i <str.length; i++) {
        result.push(str[i].split('').reverse().join(''))
    }
    return result.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))