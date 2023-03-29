function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    for(let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i]
    }
    let k = sum / classPoints.length
    return yourPoints > k
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

/*
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}*/
