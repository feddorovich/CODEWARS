function points(games) {
    let arr = []
    let score = 0
    for (let i = 0; i < games.length; i++) {
        arr.push(games[i].split(':'))
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > arr[i][1]) {
            score += 3
        }
        if (arr[i][0] === arr[i][1]) {
            score += 1
        }
        if (arr[i][0] < arr[i][1]) {
            score += 0
        }
    }
    return score
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))