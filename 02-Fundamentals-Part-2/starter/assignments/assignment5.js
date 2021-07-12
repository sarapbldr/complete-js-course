/* Crea un array que contenga 4 population values de 4 countrys que escojas.
Debes utilizar los valores que ya has usado previamente. Guarda este array en una
variable llamada 'population'.
Pon en el console si el array tiene 4 elementos (true o false).
Crea un array llamado 'percentages' conteniendo el porcentage de world population de esos
4 valores. Usa la función 'percentageOfWorld1' para computar los 4 valores.*/

function percentageOfWorld1 (population) {
  const totalPercentage = population / 7900 * 100;
  return totalPercentage;
}

const population = [ 46, 33, 40, 26 ];
console.log(population.length === 4);

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3])
];

console.log(percentages);

