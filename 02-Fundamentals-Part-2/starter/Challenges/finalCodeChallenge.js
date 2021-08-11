/* 1. Crea una array 'bills' que contenga los 10 test bill values.
2. Crea una array vacía para los tips y el total ('tips' y 'totals')
3. Usa la funcion calcTip para calcular tips y valores totales (bill + tip) para cada bill value en
los arrays bills.
Usa for loop para hacer los 10 cálculos!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 y 52.
*/

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
  return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i]
  const tip = calcTip(bill);
  tips.push(tip);
  const total = bill + tip;
  totals.push(total);
  console.log(`${bill} + ${tip} = ${total}`);
}

console.log(tips);
console.log(totals);
