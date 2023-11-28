"use strict";

// //objects
// const student = {
//   fullName: "Nimmi",
//   birthYear: 1993,
//   city: "Dhaka",
//   isDeveloper: true,
//   favoriteSubjects:["English", "JavaScript", "Math"],
// };

// Object.seal(student);
// Object.freeze(student);

// console.log(student);

// accessing properties
// console.log(student.favoriteSubjects); //dot notation
// console.log(student["favoriteSubjects"][0]); //bracket notation

// mutate/modify properties
// student.fullName = "Nimmi Rahman"
// student.favoriteSubjects = ["C++", "C#", ".net"];

// student.favoriteSubjects[1] = "Python";
// student.favoriteSubjects[2] = "PHP";
// // student.favoriteSubjects[student.favoriteSubjects.length - 1] = "PHP";

// // console.log(student)

// // add new property
// student.hobby = "Gardening";

// student.favoriteSubjects.pop()
// delete student.city;

// console.log(student)

// methods inside objects
// const programmingLang = {
//   langName: "JavaScript",
//   libraries: ["React", "jQuery"],
//   frameworks: {
//     angular: { leraningCurve: "Hard", Architeture: "Modular" },
//     vue: { leraningCurve: "medium", Architeture: "MVC" },
//   },
// };

// console.log(programmingLang.frameworks.vue.Architeture);

// methods inside objects
// const student1 = {
//   fullName: "Sagor",
//   birthYear: 1993,
//   calcAge: function (birthYear) {
//     console.log(this.birthYear);
//     return 2023 - birthYear;
//   },
// };

// console.log(student1.calcAge(2000))

// Object.freeze(student1);

// const student2 = student1;

// student1.fullName = "Alam"

// console.log(student1);
// console.log(student2);

// loops
// for-loop
// for(initializer, condition, increament){}
// for (let i = 1; i <= 1000; i++){
//   console.log(i, "Something");
// }
//   const numbers = [10, 15, 18, 23, 27, 50, 45, 36, 98, 78, 42];

//   for (let i = 0; i <numbers.length; i++){
//   if(numbers[i] % 2 === 0) console.log("Even", numbers[i]);
//   if(numbers[i] % 2 !== 0) console.log("odd", numbers[i]);
// }

// const myNums = [-1, 30, -28, 0, 5, 35, -25];
// for (let i = myNums.length-1; i >= 0; i--){
//   if (myNums[i] >= 0) {
//     console.log(myNums[i]);
//   }
// }

// const myNums = [-1, 30, -28, 0, 5, 35, -25];
// for (let i = myNums.length-1; i >= 0; i--){
//   if (myNums[i] < 0) {
//     console.log(myNums[i]);
//   }
// }

// const animals = ["Tiger", "Lion", "Cat", "Zebra"];

// for (let i = 0; i < animals.length; i++) {
  
//   if (animals[i] === "Cat") {
//     // break;
//     continue
//   }

//   console.log(animals[i]);
// }

// const arr = [10, 20, 30, 40, 50, 60];

// let i = 0;

// while( i < arr.length) {
//   console.log(arr[i]);

//   i++
// }

// const langs= ["C++", "Java", "Python", "C#", "PHP"];

// let i = 0;

// while (i < langs.length) {
//   console.log(langs[i]);

//   i++;
// }


const langs= ["C++", "Java", "Python", "C#", "PHP"];

let i = langs.length - 1;

while (i >= 0) {
  console.log(langs[i]);

  i--;
}