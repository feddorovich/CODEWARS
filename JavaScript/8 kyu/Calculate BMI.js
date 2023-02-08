function bmi(weight, height) {
    let k = weight/(height*height)
    if (k<=18.5) {
        return 'Underweight'
    }
    if (k<=25.0) {
        return 'Normal'
    }
    if (k<=30.0) {
        return 'Overweight'
    }
    if (k>30.0) {
        return 'Obese'
    }
    return k
}

console.log(bmi(80, 1.8))