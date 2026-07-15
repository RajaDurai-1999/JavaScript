// 1
let dob = new Date("2002-07-15");
let today = new Date();
let currentYear = today.getFullYear();
let birthYear = dob.getFullYear();
let age = currentYear - birthYear;
console.log("Employee Age:", age, "Years");

// 2
let appointment = new Date();

appointment.setFullYear(2027);
appointment.setMonth(11);
appointment.setDate(15);
appointment.setHours(10);
appointment.setMinutes(30);
console.log("Updated Appointment:",appointment);

// 3
let zoneToday = new Date();

console.log("India:");
console.log(
zoneToday.toLocaleString("en-IN",
{
timeZone:"Asia/Kolkata"
})
);

console.log("New York:");
console.log(
zoneToday.toLocaleString("en-US",
{
timeZone:"America/New_York"
})
);

console.log("Tokyo:");
console.log(
zoneToday.toLocaleString("en-JP",
{
timeZone:"Asia/Tokyo"
})
);

// 4
let purchaseDate = new Date();

let warrantyDate = new Date(purchaseDate);

warrantyDate.setFullYear(warrantyDate.getFullYear()+2);

console.log("Purchase Date:",purchaseDate);

console.log("Warranty Expiry:",warrantyDate);
// 5
function digitalClock(){

let currentTime=new Date();

console.log(currentTime.toLocaleTimeString());

}

setInterval(digitalClock,1000);