/* Crea un array con los países vecinos del país que escojas. Escoge uno que al menos tenga
2 países vecinos. Guarda el array en una variable llamada 'neighbours'.
En algún punto se crea un país vecino que se llama 'Utopia', añadelo al final del array 'neighbours'.
Desgraciadamente ese país se disuelve, así que quítalo del final.
Si el array 'neighbours' no contiene 'Germany', log a la console:
'Probably not a central European country :D'.
Cambia el nombre de uno de tus países vecinos. Para hacer eso, encuentra el index del país
en el array 'neighbours' y luego utiliza el index para reemplazarlo.
*/

const neighbours = [ 'Belgium', 'Luxembourg', 'Switzerland', 'Italy', 'Spain' ];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log ('Probably not a central European country :D')
}

console.log(neighbours.indexOf('Luxembourg'));
neighbours[neighbours.indexOf('Luxembourg')] = 'Germany';
console.log(neighbours)
