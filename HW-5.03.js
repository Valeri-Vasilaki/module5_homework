function reverseString(inputString) {
  let reversedString = inputString.split("").reverse().join("");
  return reversedString;
}

let originalString = "Hello";
let reversedString = reverseString(originalString);

console.log(reversedString);