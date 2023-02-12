function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

/*
function sumTwoSmallestNumbers(numbers) {
    // numbers = numbers.sort((a, b) => a - b)
    for (let j = 0; j < numbers.length; j++) {
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i] > numbers[i + 1]){
                let temp = numbers[i]
                numbers[i] = numbers[i + 1]
                numbers[i + 1] = temp
            }
        }
    }

    return numbers[0] + numbers[1]

    Сортировка пузырьком / Bubble sort
}*/
