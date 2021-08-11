/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with
these temperatures.
Example: [17, 21, 23] will print "... 17ºc IN 1 DAYS... 21ºC in 2 days ... 23ºC in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the
above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Teniendo un array con pronóstico de temperaturas máximas el termómetro muestra un string
// con esas temperaturas.
// Crea una función que se lame 'printForecast' en un array llamada 'arr' y haga log del string
// como la de antes en el console.

// - Crear un array con las temperaturas
// - Crear una función que muestre esas temperaturas según los días
// - Que la función haga console log del string con las temperaturas y los días

const temperatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let finalTemps = '';
  for (let i = 0; i < arr.length; i++) {
    const maxForecasted = arr[i];
    finalTemps = finalTemps + `...${maxForecasted}ºC IN ${i + 1} DAYS`;
  }

  console.log(finalTemps);
};

printForecast(temperatures);
