// 1
let names=prompt("Enter your Name");
let ages =prompt("Enter your Age");
console.log("My name is "+ names);
console.log("I am "+ages+ "years old");
// 2
let isDegree = confirm("Did You completed Degree?");
if (isDegree===true){
    console.log("Degree Completed");
}
else{
    console.log("Degree Not Completed");
}
// 3
let mobilePrice = 15000;
let discount = 2000;

let finalPrice = mobilePrice - discount;

console.log("Final Price : " + finalPrice);
// 4
let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}
// 5
let cart = [
    "Rice",
    "Milk",
    "Sugar",
    "Tea Powder"
];

console.log("First Product:"+ cart[0]);
console.log("Last Product:"+ cart[cart.length - 1]);
console.log("Total Products:"+ cart.length);
// 6
let student = {
    name: "Naveen",
    age: 18,
    course: "MERN"
};

console.log("Student Name :"+ student.name);
console.log("Student Course :"+ student.course);
// 7
let salary = 25000;
let bonus = 5000;

let totalSalary = salary + bonus;

console.log("Total Salary :"+ totalSalary);
// 8
let username = "admin";
let password = "1234";

let enteredUsername = prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");

if (
    enteredUsername === username &&
    enteredPassword === password
) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}
// 9
let foodPrice = 350;
let deliveryCharge = 50;

let totalBill = foodPrice + deliveryCharge;

let gst = totalBill * 0.05;

let grandTotal = totalBill + gst;

console.log("Total Bill :"+ totalBill);
console.log("GST :"+ gst);
console.log("Grand Total :"+ grandTotal);
// 10
let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
};

console.log("Product Name :", product.name);
console.log("Brand :", product.brand);
console.log("Price :", product.price);

if (product.stock) {
    console.log("Stock Available");
} else {
    console.log("Out of Stock");
}
// 11
let attendance = confirm("Present?");

if (attendance ===true) {
    console.log("Attendance Marked");
} else {
    console.log("Absent");
}
// 12
let balance = Number(prompt("Enter Current Balance:"));
let withdraw = Number(prompt("Enter Withdraw Amount:"));

if (withdraw <= balance) {
    let remainingBalance = balance - withdraw;

    console.log("Transaction Successful");
    console.log("Remaining Balance :", remainingBalance);
} else {
    console.log("Insufficient Balance");
}
