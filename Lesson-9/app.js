// // Create
// let numberArray = [1,2,3];
// let stringArray = ["AB", "BC", "CD"];

// let booleanArray = new Array(true, false, true);

// // Read
// // Array starts from 0
// console.log(numberArray);
// console.log(numberArray[2]);

// console.table(stringArray);

// console.log(numberArray[3]);

// for (let i = 0; i < stringArray.length; i++) {
//     const element = stringArray[i];
//     console.log(element);
// }

// for (const number of numberArray) {
//     console.log(number);
// }

// console.log(`numberArray has ${numberArray.length} elements`);

// // Update
// numberArray[1] = 10;
// console.log(`numberArray is ${numberArray}`);

// numberArray.push(4);
// console.table(numberArray);
// numberArray.push(5, 6);
// console.log("push 5, 6");
// console.table(numberArray);

// let newLength = numberArray.unshift(-1, 0);
// console.log("Unshift -1, 0");
// console.log(newLength);
// console.table(numberArray);

// // numberArray[5] = 0;
// // console.log(numberArray[4]);
// // console.table(numberArray);

// // Delete 
// // Delete first elements
// let firstElement = numberArray.shift();
// console.log(`Deleted ${firstElement}`);
// console.table(numberArray);

// let deletedNumber = numberArray.splice(5, 1); // Delete the 5th element
// console.table(numberArray);
// console.log(`Deleted ${deletedNumber}`);

// let deletedNumbers = numberArray.splice(4);
// console.log(`Deleted ${deletedNumbers}`);
// console.table(numberArray);

// let ticTacToe = 
// [
//     ["X", null, null],
//     [null, "X", null],
//     [null, null, "O"]
// ];
// console.log(ticTacToe);
// console.log(ticTacToe[1][1]);

// // Nhập số n từ bàn phím
// // Tạo mảng chứa n phần tử, nhập từ 1...n từ bàn phím
// // Tính tổng, trung bình cộng
// // Tìm min, max
// // Tìm số xuất hiện nhiều nhất trong mảng [1, 2, 3, 4, 3] => 3
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     // Random number from 0 to 100
//     let num = Math.floor(Math.random() * (100 - 0 + 1) + 0);
//     arr.push(num);
// }
// console.log(arr);
// let min = arr[0], max = arr[0];

// // loop from 2nd to last
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(`Max is ${max}, min is ${min}`);

// // Object
// // Like a dictionary
// // Key1 = Value1
// // Key2 = Value2
// // Key3 = [Value3.1, Value3.2]

// // Create
// let student = {
//     name: "Trung",
//     age: 24,
//     'isMale': true,
//     skills: ["C#", "JS", "HTML", "CSS"]
// };

// let numbers = {
//     1: "one",
//     2: "two"
// }

// // Read
// console.log(student.name);
// console.log(student["age"]);

// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         const value = student[key];
//         console.log(key, value);
//     }
// }

// // Accessing undefined key
// console.log(student.money);

// // Update
// student.name = "Kiên";
// student["age"] = 24;
// console.table(student);

// // student["parents"] = ...
// student.parents = {
//     name: "ABC"
// }

// console.log(`parents of student: ${student.parents.name}`);

// // Delete
// delete student.skills;
// console.table(student);

let students = [
    {
        name: "A",
        scores: [5, 6]
    },
    {
        name: "B",
        scores: [7, 8.5]
    },
    {
        name: "C",
        scores: [7]
    }
];

for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let sum = 0;
    for (let j = 0; j < currentStudent.scores.length; j++) {
        sum += currentStudent.scores[j];
    }
    let avg = sum / currentStudent.scores.length;
    currentStudent["avg"] = avg;
    console.log(`Student ${currentStudent["name"]} has average of ${avg}`);
}

console.log(a);
let minAvg = students[0];
let maxAvg = students[0];
for (let i = 1; i < students.length; i++) {
    const currentStudent = students[i];
    if (currentStudent.avg < minAvg.avg) {
        minAvg = currentStudent;
    } 

    if (currentStudent.avg > maxAvg.avg) {
        maxAvg = currentStudent;
    }
}

console.log(`Student ${minAvg.name} has the lowest avg: ${minAvg.avg}`);
console.log(`Student ${maxAvg.name} has the highest avg: ${maxAvg.avg}`);

// Number, string, boolean are value types
// Object and Array are reference types
let arr1 = [1, 3, 4];
let arr2 = arr1;
console.log(arr2);
arr2[0] = 10;
console.log(arr1);

// Copy array: Spread operator
arr2 = [...arr1];
arr2[2] = 100;
console.log(arr1);

// Nhập điểm (-1 để thoát): 10
// Nhập điểm (-1 để thoát): 9
// Nhập điểm (-1 để thoát): 0
// Nhập điểm (-1 để thoát): -1
// Học sinh "A" có các điểm [10, 9, 0]







