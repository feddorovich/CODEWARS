function removeSmallest(numbers) {
    let copy = [...numbers]
    let smallest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (smallest > numbers[i]) {
            smallest = numbers[i]
        }
    }
    const index = numbers.indexOf(smallest)
    if (index !== -1) {
        copy.splice(index, 1)
    }

    return copy
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([2, 2, 1, 2, 1]))