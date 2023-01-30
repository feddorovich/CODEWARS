function XO(str) {
    let lowerStr = str.toLowerCase('');
    let splitStr = lowerStr.split('');
    let x = [];
    let o = [];
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'x') {
            x.push('x')
        }
    }
    for (let j = 0; j < splitStr.length; j++) {
        if (splitStr[j] === 'o') {
            o.push('o')
        }
    }
    return x.length === o.length
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))


function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
console.log(XO2('xo'))

/*
Метод match() возвращает получившиеся совпадения при сопоставлении строки с
регулярным выражением.
Регулярные выражения:
x,o - символы поиска
g - глобальный поиск
i - регистронезависимый поиск
Подробнее:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
 */