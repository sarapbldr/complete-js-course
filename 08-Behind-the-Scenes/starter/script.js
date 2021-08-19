'use strict';

// // function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are  ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scoper's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// const prueba = true;


// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;


// THIS KEYWORD

//console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  // console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  // console.log(this);
};
calcAgeArrow(1995);

const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2021 - this.year);
  }
}
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
