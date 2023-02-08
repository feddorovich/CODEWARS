function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length < smallest.length){
            smallest = arr[i];
        }
    }
    return smallest.length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort('turns out random test cases are easier than writing out basic ones'))
console.log(findShort('Let\'s travel abroad shall we'))

function findShort2(s){
    arr = s.split(' ')
    arr.sort( (a, b) => {
        return a.length - b.length
    })
    return arr[0].length
}

console.log(findShort2('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort2('turns out random test cases are easier than writing out basic ones'))
console.log(findShort2('Let\'s travel abroad shall we'))

/*
.sort() - метод массива, который по дефолту сортирует по алфавиту
a.length - сортирует по количеству букв в слове

так же можно было решить вот так:
unction findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
*/
