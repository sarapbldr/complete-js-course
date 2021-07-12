/*
let js = 'amazing'

console.log (40 + 8 + 23 - 10);
console.log ('Jonas');
console.log (23);

let firstName = 'Bob';
console.log (firstName);
console.log (firstName);
console.log (firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log (myFirstJob);
console.log (myCurrentJob);

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year);

console.log(typeof null);

let age = 30
age = 31

const birthYear = 1991;
 birthYear = 1990
const job;
var job = 'Programmer';
job = 'Teacher';

*/

/*
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the powers of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1 = 101
x--; //x = x - 1 = 100
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log((now - 1991) > (now - 2018));
*/

/*
console.log((ageJonas > ageSarah) && (ageJonas > 75))
true OR false === true
true OR true === true
false OR true === true
false OR false === false

true AND false === false
true AND true === true
false AND false === false
false AND true === false


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log((now - 1991) > (now - 2018));

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const now = 2021;

const jonas = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${now - birthYear} years old ${job} !`;
console.log(jonasNew, a, b, 'sdfgh', 123);
console.log('Soy la puta ama');
console.log('String with \n\
multiples \n\
lines');
console.log(`String with
multiple
lines`);


// crea una función que se llame 'canDrive' y retorne las frases

// const age = 15;
// const drivingAge = 16;


function canDrive (name, age, drivingAge) {
  if (age >= drivingAge) {
    console.log(`${name} can start driving license🚗`);
    return true;
  } else {
    const yearsLeft = drivingAge - age;
    console.log(`${name} is too young. Wait another ${yearsLeft} years.`);
    return false;
  }
}

canDrive('sara', 25, 18);
canDrive('Eric', 27, 18);
canDrive('Eric', 17, 18);

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number (inputYear) + 18);

console.log(Number ('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean (''));

const money = 100;
if(money) {
    console.log("Don't spendt it at all");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height){
    console.log ('YAY Height is defined!');
} else {
    console.log ('Height is UNDEFINED');
}


const age = '18';
if (age === 18){
  console.log ('You just became an adult (strict)');
}
if (age == 18){
  console.log ('You just became an adult (loose)');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number')
} else if(favourite === 7) {
  console.log('7 is also a cool number!')
} else if(favourite === 9){
  console.log('9 is also a cool number!')
} else {
  console.log('Number is not 23 or 7 or 9')
}
if (favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; //C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



//if(shouldDrive){
//    console.log('Sarah is able to drive!')
//} else{
//    console.log('Someone else should drive...')
//}

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(shouldDrive){
  console.log('Sarah is able to drive!')
} else{
  console.log('Someone else should drive...')
}


const day = 'friday';

switch(day) {
  case 'monday': // day = monday
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if(day === 'tuesday') {
  console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}


if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas'
console.log(`I'm ${2017 - 1991} years old ${me}`)


const age = 23;
//age >= 18 ? console.log ('I like to drink beer🍻') : console.log ('I like to drink water🚰');

const drink = age >= 18 ? 'beer' : 'water';
console.log (drink);

let drink2;
if(age >=18) {
  drink2 ='wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'beer' : 'water'}`);
*/

