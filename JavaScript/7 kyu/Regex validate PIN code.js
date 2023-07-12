function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] > '9' || pin[i] < '0') {
            return false
        }
    }
    return true
}

console.log(validatePIN("123"))
console.log(validatePIN("1234"))
console.log(validatePIN(".234"))
console.log(validatePIN("123456"))