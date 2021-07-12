const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.65;

function calculateBMI (mass, height) {
  return mass / (height * height);
}

const markBMI = calculateBMI(markMass, markHeight);
const johnBMI = calculateBMI(johnMass, johnHeight);
//console.log(markBMI);
//console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
//console.log(markHigherBMI);

function roundDecimals (number, decimals) {
  return (Math.round(number * (10 ^ decimals))) / (10 ^ decimals);
}

if (markBMI > johnBMI){
  console.log(`Mark's BMI ${roundDecimals(markBMI, 2)} is higher than John's ${roundDecimals(johnBMI, 2)}!`);
} else {
  console.log(`John's BMI ${roundDecimals(johnBMI, 2)} is higher than Mark's ${roundDecimals(markBMI, 2)}`);
}
