// ARRAY

const countries = ["Turkiye","Italy","Argentina","South Korea","India"]
    console.log(countries);

    console.log(countries.length);

    console.log("First one:",countries[0]);
    console.log("Middle one:",countries[Math.floor(countries.length/2)]);
    console.log("Last one:",countries[countries.length-1]);

    console.log(countries.toString());

    countries.push("Greek");
    console.log(countries.toString())
