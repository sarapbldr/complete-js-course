/* PARTE 1
let dolphinsScore = 96 + 108 + 89;
let koalasScore = 88 + 91 + 100;

let averageDolphinScore = (dolphinsScore / 3);
let averageKoalasScore = (koalasScore / 3);

console.log(dolphinsScore);
console.log(koalasScore);
console.log(averageDolphinScore);
console.log(averageKoalasScore);

if (averageDolphinScore > averageKoalasScore){
    console.log('Dolphins wins the competition!')
} else{
    console.log('Koalas wins the competition!')
}
*/

// PARTE 2

/*
  DIFERENCIAS
  - Nombre en el console
  - Variable con puntuación media

  El resto es igual
*/

/*
  - Crear función que haga:
    * Comparando la mediana de puntuación con la puntuación mínima para ganar (100)
    * Si esa puntuación mínima se supera, muestra un mensaje con el nombre del ganador
*/

const showWinner = (teamName, teamScore) => {
  if (teamScore >= 90) {
    console.log(`${teamName} wins the competition!`);
  }
};

let dolphinsScore = 97 + 40 + 101;
let koalasScore = 97 + 40 + 101;

let averageDolphinScore = dolphinsScore / 3;
let averageKoalasScore = koalasScore / 3;

if (averageDolphinScore > averageKoalasScore) {
  showWinner('Dolphins', averageDolphinScore);
} else if (averageKoalasScore > averageDolphinScore) {
  showWinner('Koalas', averageKoalasScore);
} else {
  console.log("It's a draw!");
}


/*
function suma (num1, num2) {
  return num1 + num2;
}

function cagarmeEnTuPutaMadre () {
  alert('Pues me cago en tu puta madre');
}
*/
