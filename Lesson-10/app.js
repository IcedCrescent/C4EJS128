// Palindrome
// let n = 1234;

// let isPalindrome = false;

// let temp = n;
// let sum = 0;
// while(temp > 0)
// {
//     let lastDigit = temp % 10;
//     sum = (sum * 10) + lastDigit;
//     temp = parseInt(temp / 10);
// }

// console.log(`${n} is ${sum == n ? '' : 'not'} palindrome`);

// Function - Method
// y = f(x)
// resusable 

// Declare a function
// JSDoc
/**
 * Calculate the sum of 2 numbers
 * @param {Number} a first number
 * @param {Number} b second number
 * @returns {Number} sum of 2 numbers
 */
function add(a, b) {
    return a + b;
}

// Use (call) a function
let result1 = add(1, 32);
let result2 = add(-6, 0);
let result3 = add('a', 'b');
let result4 = add("1", 2);
let result5 = add(5);

let result6 = add(4, add(1, 2));

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

// void: return nothings

/**
 * Display an alert welcoming the user
 * @param {String} name the name of the user
 */
function greeting(name) {
    // Logic
    alert(`Hello ${name}`);
}

function doSomething() {
    return 0;
}

function returnNothing() {

}

let arr = [1, 2, 34];
let num = 45;

function change(arr, num) {
    // arr references the original arr
    arr.push(10);
    // num is a copy of the original num
    num = 20;
    console.log(`arr inside the fucntion: ${arr}`);
    console.log(`num inside the fucntion: ${num}`);
}

console.log(`arr before calling the function: ${arr}`);
console.log(`num before calling the function: ${num}`);
console.log("-----");

change(arr, num);

console.log("------");
console.log(`arr after calling the function: ${arr}`);
console.log(`num after calling the function: ${num}`);

// Setup
const contacts = [
    {
      firstName: "Van",
      lastName: "Nguyen",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Pho"],
    },
    {
      firstName: "Son",
      lastName: "Trinh",
      number: "0994372684",
      likes: ["Cheese", "Donut", "Apple"],
    },
    {
      firstName: "Trong",
      lastName: "Le",
      number: "0487345643",
      likes: ["Beer", "King Crab"],
    },
    {
      firstName: "Tong",
      lastName: "Vo",
      number: "unknown",
      likes: ["Tiger", "Sword", "Wine"],
    },
  ];
  
  /**
   * Find the value of the contact based only user's firstName
   * @param {String} name the firstName of the contact
   * @param {String} prop the property (key) of the data you want to retrieve
   */
  function lookUpProfile(name, prop) {
    // Chỉ code phía dưới này
  
    // Chỉ code phía trên này
  }
  
  lookUpProfile("Van", "likes");

  // obj[keyName]
// Object.hasOwnProperty("propertyName");
// Object.hasOwnProperty.call(obj, keyName") => true/false



