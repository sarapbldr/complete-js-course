const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

function calculateBMI (mass, height) {
  return mass / (height * height);
}

const markBMI = calculateBMI(markMass, markHeight);
const johnBMI = calculateBMI(johnMass, johnHeight);
console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);