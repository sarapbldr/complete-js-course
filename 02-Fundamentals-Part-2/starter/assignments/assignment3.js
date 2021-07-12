const country = 'Spain';
const spainPopulation = 46.90;
const worldPopulation = 7900;


const percentageOfWorld3 = (population) => {
  const totalPercentage = population / worldPopulation * 100;
  console.log (`${country} has ${spainPopulation} million people, so its about ${totalPercentage}%.`);
  return totalPercentage;
}

console.log(percentageOfWorld3(spainPopulation));
