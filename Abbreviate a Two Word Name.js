function abbrevName(name){
    let [first,last] = name.split(' ')
    return first[0].toUpperCase() + '.' + last[0].toUpperCase()
  }

/*

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

or

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

or

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

*/