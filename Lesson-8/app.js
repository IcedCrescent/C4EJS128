// + - * / **
// < <= == === != !== > >=

// strict equal comparison == !==
let myAge = 16;
let money = 1000;

const ENTRANCE_FEE = 2000;
let isOver18 = myAge > 18;

let username = "ABC";
let password = "xyz";
let isLoggedIn = username == "admin" && password == "admin";

// AND && 
// OR ||
// NOT !
// let age = parseInt(prompt("How old are you")); // age is number

// if (conditionIfTrue) {
//      Code when true...
// } else {
//      Code when false...
// }
// if (age > 0) {
//     alert(`You were born in ${2022 - age}`);
// } else {
//     alert("Invalid value, age must be greater than 0!");
// }

// if (isNaN(age)) {
//     alert("age is not a number, cannot compare");
// }

// if (age < 0) {
//     alert("You do not exist");
// } else if (age < 10) {
//     alert("You are a kid");
// } else if (age < 18) {
//     alert("You are a teenager");
// } else if (age < 50) {
//     alert("You are an adult");
// } else if (age < 100) {
//     alert("you are old");
// } else {
//     alert("You are too old");
// }

// let isFalsy = NaN;
// if (isFalsy) {
//     console.log(`Nevermind`);
// } else {
//     console.log(`${isFalsy} is false`);
// }

// let role = prompt("Enter username");
// switch (role) {
//     case "admin":
//         console.log("Welcome admin");
//         // fall through
//     case "moderator":
//         console.log("Welcome mod");
//         break;
//     default:
//         console.log("Welcome user");
//         break;
// }

// Loop
// For loop
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         // Skip to next loop, ignore the code below
//         continue;
//     } else if (i == 9) {
//         // escape the loop
//         break;
//     }
//     console.log(i);
// }

// for (let i = 10; i > 0; i = i - 3) {
//     console.log(i);
// }

// while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let a = 1;
// do {
//     console.log(a);
//     a++;
// } while(a < 10);

// Input validation
let a = 0;
while (true) {
    a = parseInt(prompt("Enter a number:"));
    if (!isNaN(a)) {
        break;
    }
    alert(`${a} is not a number!`);
}
alert(`you entered: ${a}`);



