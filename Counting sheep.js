function countSheeps(arrayOfSheep) {
    var sum = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true) {
        sum++;
      }
    }
    return sum;
  }