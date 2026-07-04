// 1
function employeeLogin() {

    if (true) {

        var companyName = "Stackly IT";
        let employeeId = 101;
        const password = "stack123";

        console.log("Inside Block");
        console.log("Company Name:", companyName);
        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
    }

    console.log("\nOutside Block");
    console.log("Company Name:", companyName); 

    // console.log("Employee ID:", employeeId);  
    // console.log("Password:", password);    
}    

employeeLogin()
// 2
var accountBalance;

console.log(accountBalance);

accountBalance = 5000;

console.log(accountBalance);

console.log(".....let.....")

// console.log(accountBalance1);

// let accountBalance1 = 5000;

// console.log(accountBalance1);

// console.log("......const.....")

// console.log(accountBalance2);

// const accountBalance2 = 5000;

// console.log(accountBalance2);

// 3

function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}
orderFood("Chicken Biryani");

// 4

let updateStatus = function(status) {
    console.log("Status Updated :", status);
};
updateStatus("Busy in Meeting");

// 5

const weather = (city, temperature) => {
    console.log(`${city} Temperature is ${temperature}°C`);
};
weather("Chennai", 36);

// 6

(function () {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();

// 7

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);

// 8

function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

const videos = playlist();

console.log(videos.next().value); 
console.log(videos.next().value); 
console.log(videos.next().value); 
console.log(videos.next().value); 
console.log(videos.next().value); 

// 9

function calculateTotal() {
    let total = 485;
    return total;
}

let totalMarks = calculateTotal();

console.log("Total Marks :", totalMarks);

// 10

function shoppingcart(price1,price2,price3) {
    let totalAmount = price1+price2+price3;
    return totalAmount;
}
let shopping =shoppingcart(103,104,105);
console.log("Total Amount :",shopping);

// 11

function salary(basic, hra, bonus) {
    let totalSalary=basic+hra+bonus;
    return totalSalary;
}
console.log("Total Salary :",salary(50000, 5000, 3000));

// 12

function foodBill(food){
    return function(drinks){
        return function(dessert){
            return food+drinks+dessert;
        };
    };
};
console.log(foodBill(550)(250)(150));

// 13

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

const coupons = couponGenerator();

console.log(coupons.next().value); 
console.log(coupons.next().value); 
console.log(coupons.next().value); 
console.log(coupons.next().value); 
console.log(coupons.next().value); 

// 14

function transactionSuccess() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);

// 15

function employeeProfile() {

    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }

    console.log("Company :", company);         

    console.log("Designation :", designation); 
    console.log("Salary :", salary);         
}

employeeProfile();

