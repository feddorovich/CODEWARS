var isSquare = function(n){
    if (Math.sqrt(n) % 1 == 0 || n == 0) {
      return true;
    }
    return false;
  }