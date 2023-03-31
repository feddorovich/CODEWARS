String.prototype.toJadenCase = function () {
/*    let arr = this.split(' ')
    let map = arr.map(e => e[0].toUpperCase() + e.slice(1))
    return map.join(' ')*/
        return this
            .split(' ')
            .map( e => e[0].toUpperCase() + e.slice(1))
            .join(' ')
};

let str = "How can mirrors be real if our eyes aren't real"

console.log(str.toJadenCase())