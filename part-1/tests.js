const functions = require('./functions.js')
const assert = require('assert')

//month passing test

if (functions.month('2017, 5, 19') === "June") {
  console.log("\n" + "month() passes with valid input" + "\n")
}

//reverseSentence passing test

if (functions.reverseSentence("This is not code") === "code not is This") {
  console.log("reverseSentence() passes with vaild input" + "\n");
}

//nameprops passing test

const namePropsTest = functions.nameProps({"keys":1, "apple": 3})
let key = ['keys', 'apple'];

if(assert.deepStrictEqual(namePropsTest, key) === undefined) {
  console.log("nameProps() passes with valid input" + "\n")
}

//filterBetween passing test

let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
const filterBetweenTest = functions.filterBetween(arr, 'deer', 'giraffe')
let selected = ['dog']

if(assert.deepStrictEqual(filterBetweenTest, selected) === undefined) {
  console.log("filterBetween() passes with valid input" + "\n")
}
