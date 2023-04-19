//Remove the spaces found in a string

let myString = "    Coding Is So Much Fun!    ";
let WithoutSpaces = myString.replace(/\s/g, "");
console.log(WithoutSpaces);
//Result is CodingIsSoMuchFun!


// Return a Boolean if a number is divisible by 10

function isDivisibleBy10(number) {
    return number % 10 === 0;
  }
console.log(isDivisibleBy10(30)); //Result is True 
