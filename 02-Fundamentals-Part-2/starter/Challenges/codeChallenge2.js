/* Steven sigue creando su calculadora de propinas. Usa las mismas reglas que el anterior:
Tip 15% de la bill si el valor total está entre 50 y 300, si el valor es diferente tip 20%.
1. Crea una función calcTip ue coja cualquier valor de bill y devuelva el resultado del tip.
Probar con el valor de 100.
2. Crea un array 'bills' que guarde los datos 125, 555, 44.
3. Crea un array 'tips' que contenga el valor del tip por cada bill calculada con la función.
4. Crea un array 'total' que contenga el valoe total de tip + bill.
*/



function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
  return tip;
}

console.log(calcTip(100));

const bills = [ 125, 555, 44 ];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2])
];
console.log(tips);

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log(total);

