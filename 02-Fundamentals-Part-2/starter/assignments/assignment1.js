'use strict';

/*
const myContinent = 'Europe';
const myCountry = 'Spain';
const myCapitalCity = 'Madrid';
let myPopulation = 46940000;
const isIsland = false
let language = 'Spanish';
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

console.log(describeCountry('Spain', 46.9, 'Madrid'));
console.log(describeCountry('France', 33.2, 'Paris'));
console.log(describeCountry('Italy', 40, 'Rome'));
