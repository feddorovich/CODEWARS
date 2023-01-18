function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
        return []
        }
    let pos = 0, neg = 0;
    input.forEach (el => {
      if (el > 0) {
        pos++;
      } else {
        neg += el;
      }
    })
    return [pos, neg];
  }