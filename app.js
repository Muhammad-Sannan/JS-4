// Chap 9-10
// Question 1

// var city = prompt("Write the name of city");
// if (city === "Karachi"){
//     alert("Welcome to city of lights");



// Question 2
// var gender = prompt("Enter your gender");

// if (gender === "male") {
//   alert("Good Morning Sir");
// } else if (gender === "female") {
//   alert("Good Morning Ma'am");
// }


// Question 3
// var color = prompt("Enter the color of the road traffic signal (red, yellow, green): ");

// if (color === "red") {
//   alert("Stop");
// } else if (color === "yellow") {
//   alert("Get ready to stop");
// } else if (color === "green") {
//   alert("Go");
// } else {
//   alert("Invalid input. Please enter either 'red', 'yellow', or 'green'.");
// }


// Question 4
// var remainingFuel = +prompt("Enter the remaining fuel in your car:");

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }


// Question 5


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }



// if("car" < "cat"){
// alert("car is smaller than cat");
// }



// Question 6


// var marks1 = +prompt("Enter marks in subject 1: ");
// var marks2 = +prompt("Enter marks in subject 2: ");
// var marks3 = +prompt("Enter marks in subject 3: ");
// var totalMarks = +prompt("Enter total marks: ");

// var percentage = (marks1 + marks2 + marks3) / totalMarks * 100;
// document.write("Percentage: " + percentage + "%");

// if (percentage >= 80) {
//   document.write("<br>Grade: A");
// } else if (percentage >= 60) {
//   document.write("<br>Grade: B");
// } else if (percentage >= 40) {
//   document.write("<br>Grade: C");
// } else {
//   document.write("<br>Grade: D");
// }

// Question 7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (ranging from 1 to 10):"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (Math.abs(userGuess - secretNumber) <= 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Incorrect answer. The secret number was " + secretNumber);
// }

// Question 8

// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");

// }

// Question 9

// var num = 4;

// if (num % 2 === 0) {
//   console.log(`${num} is an even number.`);
// } else {
//   console.log(`${num} is an odd number.`);
// }

// Question 10
// var temperature = 35;

// if (temperature > 40) {
//   console.log("It is too hot outside.");
// } else if (temperature > 30) {
//   console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//   console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   console.log("OMG! Today’s weather is so Cool.");
// } else {
//   console.log("Invalid temperature");
// }

// Question 11
// var calculator = (num1, num2, operator) => {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else if (operator === "%") {
//     return num1 % num2;
//   } else {
//     return "Invalid operator";
//   }
// };

// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// var operator = prompt("Enter operator (+, -, *, /, %):");

// alert(calculator(num1, num2, operator));

// Chapter 12-13
//  question 1
//    var char = prompt("Enter a character: ");

// if (char >= '0' && char <= '9') {
//   console.log(char + " is a number.");
// } else if (char >= 'A' && char <= 'Z') {
//   console.log(char + " is an uppercase letter.");
// } else if (char >= 'a' && char <= 'z') {
//   console.log(char + " is a lowercase letter.");
// } else {
//   console.log(char + " is not a number or a letter.");
// }

// question 2

// var num1 = +(prompt("Enter the first number: "));
// var num2 = +(prompt("Enter the second number: "));

// if (num1 > num2) {
//   console.log(num1 + " is larger.");
// } else if (num2 > num1) {
//   console.log(num2 + " is larger.");
// } else {
//   console.log("The two numbers are equal.");
// }

// Question 3

// var num = +(prompt("Enter a number: "));

// if (num > 0) {
//   console.log(num + " is a positive number.");
// } else if (num < 0) {
//   console.log(num + " is a negative number.");
// } else {
//   console.log(num + " is zero.");
// }

// Question 4

// var vowels = "aeiouAEIOU";
// var input = "a";
// var isVowel = vowels.indexOf(input) !== -1;

// console.log(isVowel); // Output: true

// input = "b";
// isVowel = vowels.indexOf(input) !== -1;

// console.log(isVowel); // Output: false

// Question 5

// var correctPassword = "secret123";

// var userPassword = prompt("Please enter your password: ");

// if (!userPassword) {
//   console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password");
// } else {
//   console.log("Incorrect password");
// }

// Question 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// Question 7

// var time = prompt("Enter the time in 24-hour format (e.g. 1900 for 7pm): ");

// if (time >= 0000 && time < 1200) {
//   console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//   console.log("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//   console.log("Good night!");
// } else {
//   console.log("Invalid time entered. Please enter a valid time in 24-hour format (e.g. 1900 for 7pm).");
// }
