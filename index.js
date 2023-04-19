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

//Return the number of vowels in a string

function countVowels(str) {
    const vowels = "aeiouAEIOU"
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            count++;
      }
    }
    return count;
}
console.log(countVowels("stay positive")); // Result is 5
console.log(countVowels("Stay Consistent")) //Result is 4
