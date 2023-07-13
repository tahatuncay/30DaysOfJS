//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
  let driveAge = prompt("What is your age?");
    if (driveAge>=18) {
    console.log("You are suitable for driving.");
    }else {
        let waitYears = 18-driveAge
        console.log("You have to wait", waitYears, "years.");
    }  

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    let myAge = 21;
    let yourAge = prompt("What is yours?");
    if (myAge<yourAge) {
        let younger = yourAge - myAge;
        console.log("I am younger", younger,"years than you");
    }if (myAge>yourAge) {
        let older = myAge - yourAge;
        console.log("I am older",older,"years than you");
    } else {
        console.log("We are the same!");
    }  

  let note = prompt("What is your note?");
    let grade;
    
    if (80<=note && note<=100) {
      grade = "A";
    } else if (note >= 70 && note < 80) {
      grade = "B";
    } else if (note >= 60 && note < 70) {
      grade = "C";
    } else if (note >= 50 && note < 60) {
      grade = "D";
    } else if (note < 50) {
      grade = "F";
    } else {
      grade = "Please try again";
    }
    
    console.log(grade); 

let seasons = prompt("Enter a month:");

if (seasons === "September" || seasons === "October" || seasons === "November") {
  console.log("The season is Autumn.");
} else if (seasons === "December" || seasons === "January" || seasons === "February") {
  console.log("The season is Winter.");
} else if (seasons === "March" || seasons === "April" || seasons === "May") {
  console.log("The season is Spring.");
} else if (seasons === "June" || seasons === "July" || seasons === "August") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid input. Please try again.");
}
