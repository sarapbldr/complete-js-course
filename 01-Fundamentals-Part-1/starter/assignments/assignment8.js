const myContinent = 'Europe';
const myCountry = 'Spain';
let myPopulation = 46940000;
const isIsland = false
let language = 'Spanish';

const sarahLanguage = 'English';
const sarahPopulation = 50000000;
const sarahIsland = false;
language = sarahLanguage;

if (sarahLanguage === language && myPopulation < sarahPopulation && sarahIsland === isIsland) {
  console.log(`${myCountry} is your better place to live! ole!💃🏻🥘`);
} else {
  console.log(`Oh :( so sad! ${myCountry} is not your place 🥺`);
}
