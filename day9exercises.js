// CALLBACK

const square = (n) => {
    return n*n;
}

function cube(n, callback) {
    return callback(n) * n;
}
 console.log(cube(5, square));   

 // RETURNING


 const rando = x => {
    const randomm = y => {
      const randommm = z => {
        return 5 * x + 7 * y + z;
      }
      return randommm
    }
    return randomm
 }
 console.log(rando(2)(3)(10));

function sayHello() {
    console.log("Hello");
}
// setInterval(sayHello, 2000); // Hello will print out every 2 seconds

function sayHello2() {
    console.log("Hello");
}
 setTimeout(sayHello2, 2000); // Hello will print out after 2 seconds

 // forEach

 let numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(number) {
        console.log(number);
    });

// MAP
const numbers2 = [3, 5, 7];
const result = numbers2.map(function(number) {
    return number * 2;
});
console.log(result);

const countries = ['Turkiye', 'USA', 'Germany', 'France', 'England'];
const result2 = countries.map(function(country) {
    return country.toUpperCase().slice(0, 3);
});
console.log(result2);

// FILTER
const numbers3 = [3, 5, 7, 13, 15, 17];
const result3 = numbers3.filter(function(number3) {
    return number3 > 10
});
console.log(result3);

// REDUCE
const numbers4 = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

// EVERY
const cities = ['Istanbul', 'Ankara', 'Konya', 'Sivas']
const areAllStr = cities.every((city) => typeof city === 'string')

console.log(areAllStr)

// FIND
const cities2 = ['Istanbul', 'Ankara', 'Konya', 'Sivas']
const result4 = cities2.find((city) => city.length == 6)
console.log(result4)