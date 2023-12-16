// FUNCTIONS

function functionName() {
    let num = 4;
    let square = num * num;
    console.log(square);
}
console.log(functionName());

function fullname(){
    let firstName = "Taha";
    let lastName = "Tuncay";
    let space = " ";
    let fullName = firstName + space + lastName;
    console.log(fullName);
}
fullname();

function plus(){
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    return sum;
}
console.log(plus());

function areaOfCircle(r){
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(7));

function sumOfNumbers(num1, num2, num3){
    let sum = num1 + num2 + num3;
    return sum;
}
console.log(sumOfNumbers(5, 10, 15));

function sumAllNum(){
    let sum = 0;
    for(let i=0; i <arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAllNum(5, 10, 15, 10));

function sumAllNumss (...args){
    let sum = 0;
    for(let element of args){
        sum += element;
    }
    return sum;
}
console.log(sumAllNumss(5, 10, 15, 20));

const changeToUpperCase = arr => {
    const newArr = [];
    for(let element of arr){
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries = ['Turkiye', 'Greece', 'Italy', 'Spain', 'Portugal'];
console.log(changeToUpperCase(countries));

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}
console.log(printFullName('Taha', 'Tuncay'));

const printFullNamee = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(printFullNamee('Taha', 'Tuncay'));