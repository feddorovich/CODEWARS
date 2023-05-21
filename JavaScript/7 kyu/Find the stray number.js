function stray(numbers) {
    return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
}

console.log(stray([1, 1, 2]))
console.log(stray([1, 2, 1]))
console.log(stray([2, 1, 1]))