/* Challenge Mark y Jhon.
comparan BMI.*/

const markMass = 78;
const markHeight = 1.69;
const jhonMass = 92;
const jhonHeight = 1.95;

const bmiMark = markMass / markHeight ** 2;
const bmiJhon = jhonMass / (jhonHeight * jhonHeight);


const markHigher = bmiMark > bmiJhon;

console.log(bmiMark, bmiJhon, markHigher);

if (bmiMark > bmiJhon) {
  console.log(`Mark's BMI(${bmiMark}) is higher than Jhon's BMI(${bmiJhon})!`);
} else {
  console.log(`Jhon's BMI(${bmiJhon}) is higher than Mark's BMI(${bmiMark}) !`);
};
