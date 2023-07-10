//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of JavaScript"

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(2));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Days"));

console.log(challenge.split());
const myArray = challenge.split(" ");
console.log(myArray);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Phyton"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

console.log(challenge.search("of"));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));

let namee = " with Taha";
console.log(challenge.concat(namee));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = (sentence.match(/\blove\b/gi) || []).length;

console.log(count);

