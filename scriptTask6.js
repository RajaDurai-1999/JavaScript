// 1
let employee ={
    name:"Raja",
    salary:40000
}
let updateEmployee ={
    ...employee,
    bonus:5000,
    department:"Mechanical"
}
console.log(updateEmployee);
// 2
function calculateBill(...prices){
    let total=0;
    for (let price of prices){
        total=total+price;
    }
    console.log("Total Prices :",total);
    console.log("Total Items :",prices.length);
}
calculateBill(10,20,30,40);
// 3
let student ={
    name: "Rahul",
    age: 25,
    course: "MERN",
    city:"Chennai"
}
for (let key in student){
    console.log(student[key]);
}
// 4
let foods = [
    "Pizza",
    "Burger",
    "Fries"
];
foods.push("Coke");
foods.push("Ice Cream");

foods.splice(2, 1);
console.log(foods);
// 5
let transactions= [1000,2000,3000,4000]
transactions.shift();
transactions.unshift(500);
console.log(transactions);
// 6
let dept1=["HR","Sales"]
let dept2=["Developer","Testing"]
console.log(dept1.concat(dept2));
// 7
let products = ["Laptop","Mouse","Keyboard","Monitor"];

if (products.includes("Keyboard")) {
    console.log("Available");
} else {
    console.log("Not Available");
}
// 8
function login(call){
    console.log("Login Sucess");
    call();
}
function dashboard(){
    console.log("Dashboard Opened");
}
login(dashboard);
// 9
function* couponGenerator(){
    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";
}
let coupon = couponGenerator();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
// 10
function course(courseName){
    return function(batch){
        return function (room){
            console.log("Course :",courseName);
            console.log("Batch :",batch);
            console.log("Room :",room);  
        }
    }
}
        course("JavaScript")("Morning")("Batch-36");
        // non curring
        function course1(courseName1,batch1,room1){
            console.log("Course :",courseName1);
            console.log("Batch :",batch1);
            console.log("Room :",room1)
        }
        course1("Java","AfterNoon","Batch-35");
// 11
let movies = [
    "Leo",
    "GOAT",
    "Dragon",
    "Retro",
    "Coolie"
];
let result = movies.slice(2, 4);

console.log(result);
// 12
let ids=[101,102,103,104,105]
ids.splice(2,2,501,502);
console.log(ids);
// 13
let price=[5000,250,700,12000,50];
let priceSort=price.sort((a,b)=>a-b);
console.log(priceSort);
// 14
let data=["Electronics",["Mobiles",["Samsung","Apple"]]]
let [c1, [c2, [c3, c4]]] = data;

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
// 15
let developers = [
  "John",
  "David"
];

let designers = [
  "Ram",
  "Kiran"
];
let team = [...developers, ...designers];

console.log(team);
// 16
function calculateSalary() {
    let salary = 30000;
    let bonus = 5000;

    return salary + bonus;
}

let totalSalary = calculateSalary();

console.log(totalSalary);
// 17
if (true) {
    var company = "Stackly";
    let designation = "MERN Developer";
    const salary = 50000;
}
console.log(company);     
// console.log(designation);  
// console.log(salary);   
// 18
let orders = ["Pizza","Burger","Pizza","Sandwich","Pizza"];

console.log("First index of Pizza:", orders.indexOf("Pizza"));
console.log("Last index of Pizza:", orders.lastIndexOf("Pizza")); 
// 19
let items=[1,2,[3,4,[5,6]]];
let itemFlat=items.flat(Infinity);
console.log(itemFlat);
// 20
let cart = ["Mouse", "Keyboard"];
cart.push("Moniter");
cart.unshift("Laptop");
cart.splice(2,1);
console.log(cart.includes("Mouse"));

let accessories=["Webcam","Speaker"];

let completedCart=[...cart,...accessories]

console.log(completedCart);






