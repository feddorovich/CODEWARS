function stonePick(arr) {
    let stick = 0
    let cobblestone = 0
    let wood = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Wood') {
            wood += 1
        } else if (arr[i] === 'Cobblestone') {
            cobblestone += 1
        } else if (arr[i] === 'Sticks') {
            stick += 1
        }
    }

    if (wood) {
        let stickFromWood = wood * 4

        stick += stickFromWood
    }

    let stonePick = 0

    if (stick >= 2 && cobblestone >= 3) {
        let stickForPick = Math.floor(stick / 2)
        let cobblestoneForPick = Math.floor(cobblestone / 3)

        if (stickForPick && cobblestoneForPick) {
            stonePick = Math.min(stickForPick, cobblestoneForPick)
        }
    }

    return stonePick
}

console.log(stonePick(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]))
console.log(stonePick(["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]))
console.log(stonePick([]))
console.log(stonePick(["Sticks", "Wool", "Cobblestone"]))
console.log(stonePick(["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]))

// stonePick = 2 sticks, 3 cobblestones
// sticks = 4 wood