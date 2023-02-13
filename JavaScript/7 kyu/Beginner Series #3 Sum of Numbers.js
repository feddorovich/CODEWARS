function getSum(a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    return (max - min + 1) * (max + min) / 2
}

console.log(getSum(2, 4))

/*
function GetSum( a,b )
{
    tmp = 0;
    if(a < b)
        while(a <= b) tmp += a++;
    else
        while(a >= b) tmp += a--;

    return tmp;
}*/
