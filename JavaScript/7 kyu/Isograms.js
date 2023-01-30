function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
        for(j = i + 1; j < str.length; ++j)
            if(str[i] === str[j])
                return false;
    return true;
}

console.log(isIsogram('Dd'))
console.log(isIsogram('D'))

// or

function isIsogram2(str){
    return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram2('dosMm'))
console.log(isIsogram2('dosm'))

/*
new Set - новый объект, где каждое значение может появляться
только один раз
.toUpperCase - все к нижнему регистру
.size - возвращает количество (уникальных) элементов в объекте Set
 */