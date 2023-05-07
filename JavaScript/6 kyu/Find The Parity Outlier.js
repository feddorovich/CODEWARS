function findOutlier(integers){
    const evens = integers.filter( e => e % 2 === 0)
    const odds = integers.filter( e => e % 2 !== 0)

    if (evens.length < odds.length) {
        return evens[0]
    } else {
        return odds[0]
    }
}

console.log((findOutlier([0, 1, 2])))
console.log((findOutlier([1, 2, 3])))