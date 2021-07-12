/* Crear una calculadora de propina. En el país de Steven es normal dejar el 15%
si el valor de la cuenta está entre 50 y 300. Si el valor de la cuenta es diferente
la propina será del 20%.

1. Calcular la propina dependiendo del valor de la cuenta, crear una variable
llamada tip. No se puede usar if/else.
2. Mostrar en el console.log el valor de la cuenta, la propina y el total de la cuenta
(cuenta + propina).
Ejemplo: la cuenta fué 275, la propina 41,25 y el total 316,25.

TEST DATA: bill values 275, 40 and 430.
*/

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log (tip);

/*if (bill >= 50) {
  console.log(tip);
} else if (bill <=300) {
  console.log(tip);
} else {
  tip = (bill * 20) / 100;
  console.log(tip);
}*/

const totalBill = bill + tip;
console.log(totalBill);

