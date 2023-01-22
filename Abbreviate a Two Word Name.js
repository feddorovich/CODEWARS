function abbrevName(name){
    let [first, last] = name.split(" ");
    return first[0].toUpperCase() + "." + last[0].toUpperCase();
    
  }