let x1 = 42;
let x2 = "Привет";
let x3 = true;
let x4 = [1, 2, 3];

function checkType(x) {
  if (typeof x === "number") {
    console.log(`${x} — число`);
  } else if (typeof x === "string") {
    console.log(`${x} — строка`);
  } else if (typeof x === "boolean") {
    console.log(`${x} — логический тип`);
  } else {
    console.log(`Тип x не определён`);
  }
}

checkType(x1);
checkType(x2);
checkType(x3);
checkType(x4);
