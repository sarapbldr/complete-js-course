const myContinent = 'Europe';
const myCountry = 'Spain';
let myPopulation = 26940000;
const isIsland = false
let language = 'Spanish';


// Question 1

let halfPopulation = myPopulation / 2;
//console.log (halfPopulation);

// Question 2

myPopulation = myPopulation + 1;
//console.log (myPopulation);

// Question 3

let findlandPopulation = 600000;
//console.log (myPopulation > findlandPopulation);

// Question 4

let averagePopulation = 33000000;
//console.log (myPopulation < averagePopulation);

let description = `${myCountry} is in ${myContinent}, and it's ${myPopulation} people
speak ${language}.`;
//console.log (description);

if (myPopulation > averagePopulation) {
  console.log (`Spain's population is above average`);
} else {
  console.log (`Spain's population is ${averagePopulation - myPopulation} below average.`);
}
