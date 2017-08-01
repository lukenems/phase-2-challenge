//Month(date)

function month(date) {
  console.assert(typeof date === 'string', "Please insert a date, with quotes, in the syntax: 'YYYY,MM,DD'");
  let m = new Date(date)
  const month = m.getMonth() + 1;
  const monthName = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  return monthName[month]
}

//reverseSentence

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ")
}

//nameProps(obj)

function nameProps(obj) {
  return Object.keys(obj);
}

//filterBetween

function filterBetween(array, min, max) {
  var filterAnimals = array.filter(function(animal) {
    if(animal >= min && animal <= max ) {
      return animal
    }
  })
  console.log(filterAnimals)
}

module.exports = {month, reverseSentence, nameProps, filterBetween}
