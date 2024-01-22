let myArray = [1, "two", 0, null, 4, "five", true, 0, 8];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number" && !isNaN(myArray[i])) {
    if (myArray[i] === 0) {
      zeroCount++;
    } else if (myArray[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log("Количество чётных элементов:", evenCount);
console.log("Количество нечётных элементов:", oddCount);
console.log("Количество нулевых элементов:", zeroCount);
