"use strict";
// 01
let greeting = "Helo, World!";
console.log(greeting);
//02
let num1 = 10;
let num2 = 2;
let sum = num1 + num2;
let differ = num1 - num2;
let prod = num1 * num2;
let quotient = num1 / num2;
//03
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
//04
let myVar = "hello world";
// myVar = 123123.toString();
// 05
let module1 = a % b;
console.log(module1);
//06
let counter = 0;
counter += 1;
counter++;
console.log(counter);
//07
let bool1 = true, bool2 = false, bool3 = true;
//AND
console.log(bool1 && bool3 && bool2);
//OR
console.log(bool1 || bool2 || bool3);
//NOT
console.log(!bool1 || (!bool2 && bool3));
//08
let num = 10;
num += 5;
num -= 5;
num *= 2;
num /= 5;
console.log(num);
//09
let num3 = 11;
if (num3 % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
//10
let age = 18;
if (age >= 18 && age <= 18) {
    console.log("Eligible for Voting");
}
else {
    console.log("Not Eligible for Voting");
}
//11
let score = 45;
if (score >= 80) {
    console.log("Grade A");
}
else if (score >= 70) {
    console.log("Grade B");
}
else if (score >= 60) {
    console.log("Grade C");
}
else if (score >= 50) {
    console.log("Grade E");
}
else {
    console.log("Fail");
}
//12
let dig1 = 10;
let dig2 = 20;
let dig3 = 30;
if (dig1 > dig2 && dig1 > dig3) {
    console.log("Dig 1 is Maximum");
}
else if (dig2 > dig1 && dig2 > dig3) {
    console.log("Dig 2 is Maximum");
}
else {
    console.log("Dig 3 is Maximum");
}
//13
const leapYear = 2000;
if ((leapYear % 4 == 0 && leapYear % 100 !== 0) || leapYear % 400 == 0) {
    console.log("Leap Year ");
}
else {
    console.log("Isn't Leap Year");
}
//14
// 15
let randomNum1 = -10;
if (randomNum1 > 0) {
    console.log("Positive");
}
else if (randomNum1 < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// let randomNum = 0;
// const numb1 = Math.sign(randomNum);
// if (numb1 === -1) {
//   console.log("Number is Negative");
// } else if (numb1 === 0) {
//   console.log("Number is Zero");
// } else {
//   console.log("Number is Positive");
// }
//16
const tabNum = 3;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabNum} X ${i} = ${tabNum * i}`);
}
