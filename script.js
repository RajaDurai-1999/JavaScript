// Task 1
let employeeName = prompt("RajaDurai");
console.log(employeeName);
document.writeln("Welcome " + employeeName);

// Task 2
let isReady = confirm(
    "Are you ready to join today's JavaScript training?"
);
console.log(isReady);

// Task 3
alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");

// Task 4
let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);

// Task 5
let productPrice = 500;
productPrice = 750;
console.log("Updated Product Price: " + productPrice);

// Task 6
let username = prompt("Enter your username:");
if (username === "") {
    console.warn("Warning: Username cannot be empty.");
} else {
    console.log("Login Successful: " + username);
}

// Task 7
alert("Website is under maintenance.");
console.error("Error: Website is currently under maintenance.");

// Task 8
let feedback = prompt("How was today's JavaScript session?");
console.log("Feedback: " + feedback);
document.writeln("Thank you for your feedback!");

// Task 9
let name = prompt("Enter your name:");
let city = prompt("Enter your city:");
let language = prompt("Enter your favorite programming language:");

console.log("Name: " + name);
console.log("City: " + city);
console.log("Favorite Programming Language: " + language);

// Task 10
let fullName = prompt("Enter your Full Name:");
let email = prompt("Enter your Email:");
let mobile = prompt("Enter your Mobile Number:");

console.log("===== Registration Details =====");
console.log("Name   : " + fullName);
console.log("Email  : " + email);
console.log("Mobile : " + mobile);

alert("Registration Successful!");

