'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');


function nameLogger() {
  console.log('My name is Sara');
}

// calling / running function
nameLogger();
nameLogger();
nameLogger();
nameLogger();
nameLogger();

function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = foodProcessor(2, 4);
console.log(appleOrangeJuice);


// function declaration
function calcAge1(birthYear) {
  const age = 2021 - birthYear;
  return age;
}
const age1 = calcAge1(1995);

// function expression
const calcAge2 = function (birthYear) { // función sin nombre = función anónima
  const age = 2021 - birthYear;
  return age;
}
const age2 = calcAge2(1995);
console.log(age1, age2);



// ARROW FUNCTION

const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 67 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1995, 'Sara'));
console.log(yearsUntilRetirement(1993, 'Eric'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function foodProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}

console.log(foodProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 67 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1995, 'Sara'));
console.log(yearsUntilRetirement(1942, 'Mari'));


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [ 'Michael', 'Steven', 'Peter' ];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}
const years = [ 1990, 1967, 2002, 2010, 2018 ];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


/*const friends2 = [
  [ 'Michael', 'Steven', 'Peter' ],
  [ 'Paco', 'Sara', 'Eric' ],
  [ 'Maria', 'Sven', 'PdroSnchz' ]
];
console.log(friends2[0][2]);


const friends = [ 'Michael', 'Steven', 'Peter' ];

// Add elements
friends.push('Jay');
//const newLenght = friends.push('Jay');
console.log(friends);
//console.log(newLenght);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //Last
friends.pop();
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven')); // Return a boolean value
console.log(friends.includes('Bob'));

friends.unshift('Lola');

console.log(friends);

if (friends.includes('Peter')) {
  console.log ('You have a friend called Peter');
} else if (friends.includes('Lola')) {
  console.log (`Don't call her Dolores, call her Lola💃🏻`);
}


// OBJECTS

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2020 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log (jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const insterestedIn = prompt('What do you wanna know about Jonas? Choose between firstName, lastName, age, job and friends.');

if (jonas[insterestedIn]) {
  console.log(jonas[insterestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';

console.log(jonas);


// Challenge
// Jonas has 3 friends, and his best friend is called Michael.

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2020 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is ${jonas.friends[0]}`);




const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

 // calcAge: function () {
 //   return 2020 - this.birthYear;
//  }

  calcAge: function () {
  this.age = 2020 - this.birthYear;
  return this.age;
  }
};


if (jonas.hasDriversLicense) {
  console.log (`${jonas.firstName} is a ${jonas.calcAge} years old ${jonas.job} and he has a driver's licence.`);
} else {
  console.log (`${jonas.firstName} is a ${jonas.calcAge} years old ${jonas.job} and he has no driver's licence.`);
};

console.log(jonas.hasDriversLicense);


for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
};


const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];

for(let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  //types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];


for (let i = 0; i < years.length; i++) {
  console.log(i);
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break

console.log( '--- ONLY STRINGS ---');
for(let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
};

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'number') break;
  console.log(jonas[i], typeof jonas[i]);
};

const rows = [
  [ 1, 'Sara', 1995 ],
  [ 2, 'Eric', 1993 ]
];
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].length; j++) {
    const row = rows[i];
    console.log('row', i+1, 'col', j+1, '-', row[j]);
  }
  console.log('a');
}


const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ..., 4
// 4, 3, ..., 4

for (let i = jonas.length - 1; i >= 0; i-- ) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log (`------ Starting exercise ${exercise} -----`)

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}.`);
  }
}


// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// };

let rep = 1;
while (rep <= 10) {
  //console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
  rep++;
};

let dice = Math.trunc(Math.random() * 6) +1;

while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) +1;
  if (dice === 6) {
    console.log('Loop is about to end...');
  }
};
*/


