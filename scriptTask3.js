// 1
let age =Number(prompt("Enter your Age :"));
let hasId =confirm("Do you have Employee Id?");
let attendence =Number(prompt("Enter your percentage:")) ;
if(age >=18 && hasId && attendence >=75){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}
// 2
let marks=Number(prompt("Enter your marks"));
if(marks >=90 && marks <=100){
    console.log("Grade A+");
}
else if (marks >=80 && marks <=89){
    console.log("Grade A");
}
else if (marks >=70 && marks <=79){
    console.log("Grade B");
}
else if (marks >=60 && marks <=69){
    console.log("Grade C");
}
else {
    console.log("Fail");
}
// 3
let balance =5000;
let withdraw =3000;
if(withdraw <= balance ){
    balance =balance-withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : "+balance);
}
else {
    console.log("Transaction Failed");
}
// 4
let choice = Number(prompt("Enter your choice (1-5) :"));
switch(choice){
    case 1:
        console.log("You Ordered Pizza");
        break;
    case 2:
        console.log("You Ordered Burger");
        break;
    case 3:
        console.log("You Ordered Shawarma");
        break;
    case 4:
        console.log("You Ordered Biriyani");
        break;
    case 5:
        console.log("You Ordered Juice");
        break;
    default:
        console.log("Invalid Choice");
}
// 5
let purchase = 6000;
let premiumUser = true;

let discount;

if (purchase > 5000 && premiumUser) {
    discount = purchase * 0.20;
} else {
    discount = purchase * 0.10;
}

let finalPrice = purchase - discount;

console.log("Original Price :", purchase);
console.log("Discount :", discount);
console.log("Final Price :", finalPrice);
// 6
for (let day = 1; day <= 30; day++) {
    console.log("Day " + day + " Present");
}
// 7
for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 8
let mobile = "9876543210";

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
) 
{
    console.log("Valid Mobile Number");
}
 else {
    console.log("Invalid Mobile Number");
}
// 9
let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

console.log("First Item :", cart[0]);
console.log("Last Item :", cart[cart.length - 1]);
console.log("Total Items :", cart.length);
// 10
let employee = {
    name: "Naveen",
    salary: 45000,
    department: "Development",
    experience: 3
};

console.log("Employee Name :", employee.name);
console.log("Department :", employee.department);
console.log("Experience :", employee.experience);
// 11
let name = "Naveen";
let id = 1045;
let department = "Development";

console.log(`Welcome ${name}`);
console.log(`Your Employee ID is EMP${id}`);
console.log(`Department : ${department}`);
// 12
let userName = prompt("Enter your name:");
let userage = prompt("Enter your age:");
let accept = confirm("Do you accept Terms and Conditions?");

if (accept === true) {
    alert("Registered Successfully");
} else {
    alert("Registration Cancelled");
}
// 13
let salary = 35000;
let increment = 15;

let incrementAmount = salary * increment / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary :", salary);
console.log("Increment Amount :", incrementAmount);
console.log("New Salary :", newSalary);
// 14
let burger = 150;
let pizza = 300;
let juice = 80;

let subtotal = burger + pizza + juice;
let gst = subtotal * 0.18;
let grandTotal = subtotal + gst;

console.log("Subtotal :", subtotal);
console.log("GST (18%) :", gst);
console.log("Grand Total :", grandTotal);
// 15
let employees = [
    { name: "Rahul", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Kamal", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Divya", status: "Absent" }
];

let present = 0;
let absent = 0;

for (let emp of employees) {
    if (emp.status === "Present") {
        console.log(emp.name + " : Present");
        present++;
    } else {
        console.log(emp.name + " : Absent");
        absent++;
    }
}

console.log("Total Present :"+ present);
console.log("Total Absent :"+ absent);



