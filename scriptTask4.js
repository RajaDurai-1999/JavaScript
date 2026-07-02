// 1
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000,
        experience: 2
    },
    {
        name: "John",
        id: 102,
        salary: 60000,
        experience: 7
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000,
        experience: 5
    }
];
let highest=employees[0];
for(let i=1;i<employees.length;i++){
    if(employees[i].salary > highest.salary){
        highest=employees[i];
    }
}
console.log("Name :",highest.name);
console.log("Salary :",highest.salary)
// 2
let searchId = Number(prompt("Enter Employee ID:"));
let found = false;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === searchId) {
        console.log("Employee Found");
        console.log("Name :", employees[i].name);
        console.log("Salary :", employees[i].salary);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Employee Not Found");
}
// 3
let bonus = 5000;

for (let i = 0; i < employees.length; i++) {
    let totalSalary = employees[i].salary + bonus;

    console.log(
        employees[i].name + " : " + totalSalary
    );
}
// 4
for (let i=0;i<employees.length;i++){
    if(employees[i].experience >=5){
        console.log(employees[i].name +" - Senior Employee");
    }
    else{
        console.log(employees[i].name +" - Junior Employee");
    }
}
// 5
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}
// 6
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].id);
}
// 7
let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}

console.log("Total Salary :", totalSalary);
// 8
for(let i=0;i<employees.length;i++){
    if(employees[i].salary> 40000){
        console.log(employees[i].name);
    }
}
// 9
for(let i=0;i<employees.length;i++){
    employees[i].salary=employees[i].salary+5000;
    console.log(employees[i].name +" : "+employees[i].salary);
}
// 10
for (let i = 0; i < employees.length; i++) {
    console.log(`
Employee Name : ${employees[i].name}
Employee ID   : ${employees[i].id}
Salary        : ${employees[i].salary}
`);
}
