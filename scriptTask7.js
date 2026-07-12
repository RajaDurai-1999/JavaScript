// 1
const employees = [
    { name: "Raja", salary: 45000 },
    { name: "Kumar", salary: 60000 },
    { name: "Priya", salary: 120000 }
];
const employeeName=employees.map(emp=>emp.name);
console.log("Employee Name ",employeeName)

const highSalary=employees.filter(emp=>emp.salary>50000);
console.log("HighSalary ",highSalary);

const lakhSalary=employees.find(emp=>emp.salary >100000);
console.log("Lakh Salary ",lakhSalary);

const totalSalary=employees.reduce((total,emp)=>total+emp.salary,0);
console.log("Total Salary ", totalSalary);

// 2
const cart1=["Apple","Orange"];
const cart2=["Banana","Grapes"];

const mergedCart=[...cart1,...cart2];
console.log("Merged Cart ",mergedCart);

const updatedCart=[...mergedCart,"PineApple"];
console.log("Updated Cart ",updatedCart);

function checkout(...products){
console.log("Checkout ",products);
console.log("Total Product ",products.length);
};
checkout("Apple","Orange","Banana","Grapes","PineApple");

// 3
const student ={
    name:"Rajadurai",
    department:"Mechanical",
    marks:[89,79,85,80,90]
};
const {name,department,marks} = student;

const [sub1,sub2,sub3] = marks;

const totalMarks = sub1+sub2+sub3;

const avgMarks = totalMarks/3;

console.log("StudentName :",name);
console.log("Department :",department);
console.log("Subject 1 Mark :",sub1);
console.log("Subject 2 Mark :",sub2);
console.log("Subject 3 Mark :",sub3);
console.log("Total Marks :",totalMarks);
console.log("Average Marks ", avgMarks);

// 4
const product = "Apple iPhone 16 pro max";

let search = " iphone ";
search=search.trim();
search=search.toLowerCase();
console.log("Search Keyword :",search);
const productLower=product.toLowerCase();

if(productLower.includes(search)){
    console.log("Product Found");
    const highlightProduct=product.replace("iPhone","[iPhone]");
    console.log("HighlightProduct :",highlightProduct);
    
    
}else{
    console.log("Product Not found");
}

// 5
let movies = ["Leo", "GOAT", "Dragon", "Retro", "Coolie"];
console.log("Original Movies :",movies);

movies.push("Karuppu","TTT");
console.log("After Push :",movies);

let removeLast =movies.pop();
console.log("RemovedMovie :",removeLast);
console.log("AfterRemove :",movies);

let removeFirst =movies.shift();
console.log("RemoveFirstMovie :",removeFirst);
console.log("AfterRemoveFirst :",movies);

movies.unshift("Vikram");
console.log("After Unshift :",movies);

movies.splice(3,1,"Blast");
console.log("After Splice :",movies);

let rating =[8.3,9.1,7.9,8.7,8.2,7.8];
rating.sort((a,b)=>b-a);
console.log("Movie Rating :",rating);

let searchMovie ="Blast";
if(movies.includes(searchMovie)){
    console.log(searchMovie," is Available");
    
}else{
    console.log(searchMovie," is not Available");
    
}



















