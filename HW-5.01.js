let inputValue = prompt("Введите значение:");
let numberValue = +inputValue;
if (!isNaN(numberValue) && typeof numberValue === "number") {
  if (numberValue % 2 === 0) {
    console.log("Число чётное.");
  } else {
    console.log("Число нечётное.");
  }
} else {
  console.log("Упс, кажется, вы ошиблись.");
}
