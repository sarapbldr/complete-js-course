/* Challenge Mark y Jhon.
comparan BMI.

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
};*/


// 1. Crea un objeto para cada uno con las propiedades para su nombre completo, etc.
// 2. Crea una funcion dentro del objeto para calcular el BMI, guarda el valor del BMI
// en una propiedad y también retornala de la funcion.
// 3. Log en la console quien tiene el bMI mas alto, junto con el nombre completo y el BMI.




const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.totalBMI = this.mass / this.height ** 2;
    return this.totalBMI;
  }
};

const john = {
  firstName: 'Jhon',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.totalBMI = this.mass / this.height ** 2;
    return this.totalBMI;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.totalBMI > john.totalBMI) {
  console.log (`${mark.firstName} ${mark.lastName} BMI(${mark.totalBMI}) is higher than ${john.firstName} ${john.lastName} BMI(${john.totalBMI})`);
} else {
  console.log (`${john.firstName} ${john.lastName} BMI(${john.totalBMI}) is higher than ${mark.firstName} ${mark.lastName} BMI(${mark.totalBMI})`);
};


