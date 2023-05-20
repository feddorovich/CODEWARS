function friend(friends){
    result = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length < 5 && friends[i].length > 3) {
            result.push(friends[i])
        }
    }
    return result
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))