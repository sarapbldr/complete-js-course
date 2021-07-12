'use strict';

/*const spainPopulation = percentageOfWorld1(4690);
const norwayPopulation = percentageOfWorld1(532);
const italyPopulation = percentageOfWorld1(6036);

function percentageOfWorld1 (population) {
  const totalPercentage = population / 7900 * 100;
  return totalPercentage;
}

console.log(spainPopulation);
console.log(norwayPopulation);
console.log(italyPopulation);

const percentageOfWorld2 = function (population) {
  const totalPercentage = population / 7900 * 100;
  return totalPercentage;
}

const spainPopulation1 = percentageOfWorld2(4690);
const norwayPopulation1 = percentageOfWorld2(532);
const italyPopulation1 = percentageOfWorld2(6036);

console.log(spainPopulation1);
console.log(norwayPopulation1);
console.log(italyPopulation1);
*/

const country = 'Spain';
const spainPopulation = 46.90;
const worldPopulation = 7900;

function percentageOfWorld3 (population) {
  const totalPercentage = population / worldPopulation * 100;
  console.log (`${country} has ${spainPopulation} million people, so its about ${totalPercentage}%.`);
  return totalPercentage;
}

const spainPercentage = percentageOfWorld3(spainPopulation);

