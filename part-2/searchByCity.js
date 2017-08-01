const clients = require('./clients.json')
const city = process.argv[2]

if (typeof city === 'undefined') {
  console.warn("Please enter a valid search");
  process.exit(1)
};

let output = []

let citySearch = clients.filter(function(data){
  if(data.city.toLowerCase().includes(city.toLowerCase()) && data.city.length !== city.length){
      console.log("Finding clients in City " + '"' + city + '"' + "...\n");
      console.warn("Error: Either no matches exist or enter full city name in quotes");
      process.exit(1)
    } else if (data.city.toLowerCase().includes(city.toLowerCase())){
        let info = new Object();
        info.id = data.id;
        info.rep_name = data.rep_name;
        info.company = data.company;
        info.city = data.city;
        info.state = data.state;
        return output.push(info)
    }
})
console.log("Finding clients in City " + '"' + city + '"' + "...\n");
console.log(output)
