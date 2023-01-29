function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(12578))

/*
parseInt() - принимает строку, возвращает целое число
.toString() - число в строку
.split('') - разбивает строку на массив
.sort() - сортирует элементы
можно было написать вот таким образом sort((a, b) => b - a)
тогда .reverse() не нужен - он переворачивает массив
.join('') - объдиняет элементы массива в строку
*/

function descendingOrder2(n) {
    return parseInt(n.toString().split("").sort((a, b) => b - a).join(""));
}
console.log(descendingOrder2(12578))