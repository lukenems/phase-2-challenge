const clients = require ('./clients.json')
const company = process.argv[2].toLowerCase()

if (typeof company === "undefined") {
  console.warn('no search term given')
  process.exit(1)
}

let matchedItems = []

const findCompanybyName = clients.filter(function(record) {
  if (record.company.toLowerCase().includes(company)) {
    const info = new Object();
      info.id = record.id;
      info.company = record.company;
      info.phone = record.phone;

      return matchedItems.push(info)
  }
})

console.log('Finding Companies with name ' + "\"" + process.argv[2] + "\"" + '...' + "\n")
console.log(matchedItems);

 // findCompanybyName.push(function(match) {
 //   console.log('Company Name:', match.company + "\n" + 'Company id:', match.id + "\n" + 'Phone Number:', match.phone + "\n")
 // })

//example shows matched item in an object...
//this means I have to put the matched items into an array using .map()...?

//I have the matchedItems array now returning the objects still using filter, i now need to iterate through and only pull out the data I need: id, company and phone
