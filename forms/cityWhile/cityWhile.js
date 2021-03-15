let cities = []
let finished = false 
let moreCities = ""

while(finished == false) {
  moreCities = prompt("Are you finished yet with adding cities? Yes or No?")
  if(moreCities == "No") {
    finished = false 
      City = prompt("Add a new city please!")
  cities.push(City) 
} else {
  finished = true 
  }
}
  

let i = 0 

while(i < cities.length) {
  console.log(cities[i].toLowerCase())
  i++;
}