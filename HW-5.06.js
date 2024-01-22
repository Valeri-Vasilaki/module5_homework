let myArray = [1, 1, 1, 1, 1];

let areAllElementsEqual = myArray.every(
  (element, index, array) => element === array[0]
);

console.log("Все элементы в массиве одинаковые:", areAllElementsEqual);
