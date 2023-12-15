// LOOPS
    for (let  i=0;  i<10; i++) {
        console.log(i)
    }

    let j=10;
    while (j>0) {
        console.log(j);
        j--;
    }

    let k = 0;
    do {
        console.log(k);
        k++;
    } while (k <= 10);

    
    for (let a=1; a<=7; a++) {
        let line = "";
        for (let b=1; b<=a; b++) {
            line += "#";
    }
    console.log(line);
    }

    for (let c=0; c<=10; c++) {
        let result = c*c;
        console.log(c,"x",c, "=",result)
    }

    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
      ];
      
      let longestCountry = countries[0];
      for (let d=0; d<countries.length; d++) {
        if (countries[d].length > longestCountry.length) {
          longestCountry = countries[d];
        }
      }
      console.log("Country with the most characters:", longestCountry);