const quarterOf = (month) => {
    if (month === 1 || month === 2 || month === 3) {
        return 1
    }
    if (month === 4 || month === 5 || month === 6) {
        return 2
    }
    if (month === 7 || month === 8 || month === 9) {
        return 3
    }
    if (month === 10 || month === 11 || month === 12) {
        return 4
    }
}

console.log(quarterOf(3))