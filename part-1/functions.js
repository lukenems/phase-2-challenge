//Month()

function month(date) {
  console.assert(typeof date === 'string', "Please insert a date, with quotes, in the syntax: 'YYYY,MM,DD'");
  let m = new Date(date)
  const month = m.getMonth() + 1;
  const monthName = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  return monthName[month]
}

//reverseSentence()

function reverseSentence(str) {
  console.assert(typeof str === 'string', "Please enter a string to reverse")
  return str.split(" ").reverse().join(" ")
}


//nameProps()

function nameProps(obj) {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    console.warn("Please enter an Object to find keys")
  } else {
  return Object.keys(obj);
}}

//filterBetween()

function filterBetween(array, min, max) {
  if (Array.isArray(array)) {
  let selection = array.filter(function(animal) {
    return animal >= min && animal <= max
  })
  return selection
} else {
  console.warn("Please enter an array as the first parameter")
}}

module.exports = {month, reverseSentence, nameProps, filterBetween}
