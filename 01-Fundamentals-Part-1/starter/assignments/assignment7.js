const numNeighbours = Number(prompt ('How many neighbour countries does your country have?'));
console.log (numNeighbours);

if (numNeighbours == 1) {
  console.log ('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log ('More than 1');
} else {
  console.log ('No borders');
}
