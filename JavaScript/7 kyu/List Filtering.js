function filter_list(l) {
    let result = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] == 'number') {
            result.push(l[i])
        }
    }
    return result
}
console.log(filter_list([12, 'a', 15]))

// or

function filter_list2(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}
console.log(filter_list2([12, 'a', 15]))