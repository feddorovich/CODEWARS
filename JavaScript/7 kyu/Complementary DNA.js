function DNAStrand(dna){
    let arr = dna.split('')
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            result += 'T'
        }
        if (arr[i] === 'T') {
            result += 'A'
        }
        if (arr[i] === 'C') {
            result += 'G'
        }
        if (arr[i] === 'G') {
            result += 'C'
        }
    }
    return result
}

console.log(DNAStrand("ATTGC"))