/* Crea una función que se llame 'describePopulation'. Usa la forma de función que más te guste,
la función tiene que tener dos parámetros 'country' y 'population' y tiene que retornar
una frase como esta: 'China has 1441 million people, wich is about the 18.2% of the World'.
Para calcular el porcentaje 'describePopulation' llama a 'percentageOfWorld1' que has creado
antes.
Ejecuta la función con 3 países que quieras.*/

/*function percentageOfWorld1 (population) {
  return population / 7900 * 100;
}


const describePopulation = function (country, population) {
  return `${country} has ${population} million people, wich is about ${percentageOfWorld1(population)} of the World!`;
}

console.log(describePopulation('Spain', 46.94));
*/

const percentageOfWorld1 = (population) => population / 7900 * 100;
const describePopulation = (country, population) => `${country} has ${population} million people wich is about ${percentageOfWorld1(population)} of the World!`;

console.log(describePopulation('Spain', 46.94));
