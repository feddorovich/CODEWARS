function DNAtoRNA(dna) {
    arr = dna.split('')
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            arr[i] = 'U'
        }
    }
    return arr.join('')
}

console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("TTTT"))

/*
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');

    OR

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
}*/
