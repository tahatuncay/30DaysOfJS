let justMe = {
     firstName: "Taha",
     lastName: "Tuncay",
     age: 21,
     isMarried: false,
     country: "Turkiye",
     city: "Istanbul"
}
console.log(typeof(justMe));

/*Boolean value is either true or false. 
Write two JavaScript statement which provide truthy value.*/
let truthyString = "hi",
    truthyArray = [1,9,2,3]
console.log(Boolean(truthyString));
console.log(Boolean(truthyArray));

//Write two JavaScript statement which provide falsy value.

let falsyNumber = 0,
    falsyString = "";
console.log(Boolean(falsyNumber));
console.log(Boolean(falsyString));

/*  4 > 3;    true
    4 >= 3    true
    4 < 3     false
    4 <= 3    false
    4 == 4    true
    4 === 4   true
    4 != 4    false   
    4 !== 4   false
    4 != '4'  false
    4 == '4'  true
    4 === '4' false    */

/*  4 > 3 && 10 < 12       true
    4 > 3 && 10 > 12       false 
    4 > 3 || 10 < 12       true
    4 > 3 || 10 > 12       true
    !(4 > 3)               false
    !(4 < 3)               true
    !(false)               true
    !(4 > 3 && 10 < 12)    false
    !(4 > 3 && 10 > 12)    true
    !(4 === '4')           true       */

// What is the year today?
const now = new Date();
console.log(now);

const year = now.getFullYear();
console.log(year);

//What is the month today as a number?
const month = now.getMonth();
console.log(month+1);

//What is the date today?
const today = now.getDate();
console.log(today);

//What is the day today as a number?
const day = now.getDay();
console.log(day);

//What is the hours now?
const hours = now.getHours();
console.log(hours);

//What is the minutes now?
const minutes = now.getMinutes();
console.log(minutes);

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const startingDate = new Date(1970, 1, 1);
const secondsSince1970 = Math.floor((now.getTime()-startingDate.getTime())/1000);
console.log(secondsSince1970);

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));
const area = 0.5 * base * height;
console.log(area);

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const hourss = parseFloat(prompt("Enter your weekly working hours:"));
const ratePerHour = parseFloat(prompt("Enter your rate per hour:"));
const weeklyPay = 40 * 28;
console.log(weeklyPay);