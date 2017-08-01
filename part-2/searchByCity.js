const clients = require('./clients.json')

const searchTerm = process.argv[2].toLowerCase()

if (typeof searchTerm === 'undefined') {
  console.warn("Please enter a valid search");
  process.exit(1)
};

let output = []

let citySearch = clients.filter(function(data){
  if(data.city.toLowerCase().includes(searchTerm)){
    let info = new Object();
    info.id = data.id;
    info.rep_name = data.rep_name;
    info.company = data.company;
    info.city = data.city;
    info.state = data.state;
    return output.push(info)
  }
})

console.log(output)



//    id, rep_name, company, city, and state that for all clients whose city matches the provided city argument.
