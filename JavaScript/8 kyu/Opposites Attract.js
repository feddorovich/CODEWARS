function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true
    }
    if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(lovefunc(1, 4))
console.log(lovefunc(2, 2))

/*
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
---
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}
 */