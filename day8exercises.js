// Global Scope: Contains and visible in, all other scopes.
// Function Scope: Contains and visible in, all scopes within the function.
// Block Scope: Contains and visible in, all scopes within the block.

var a = 10;  // Global Scope

function scopes() {
  var b = 20; // Function Scope
  console.log(a, b, c);
    for ( i=0; i<5; i++) {
      var c = 100; // Block Scope
      console.log(a, b, c,);
    }
}
scopes();

//----------------------------------------------
    // OBJECTS
const rectangle = {
    length: 20,
    weight: 20,
}
console.log(rectangle);

const person = {
    firstName: "Taha",
    lastName: "Tuncay",
    city: "Istanbul",
    age: 22,
    skills: ["HTML", "CSS", "JS"],
    isMarried: true,
    getPersonInfo: function() {
        return `I am ${this.firstName} and I live in ${this.city}. I am ${this.age}.`
      }
}
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.skills);

person.nationality = "Turkish";
console.log(person.nationality);

person.skills.push("React");
console.log(person.skills);

console.log(person.getPersonInfo());
