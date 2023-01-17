function digitize(n) {
    return n.toString().split("").reverse().map(el => Number(el))
  }

  /*
  
  .toString - number to string
  .split - string to array
  .reverse - reverse
  .map - string to number

OR

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
---
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
  */