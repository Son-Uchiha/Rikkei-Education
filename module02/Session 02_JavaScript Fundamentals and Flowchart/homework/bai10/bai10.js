let numberA = Number(prompt("Nhập số A:"));
let numberB = Number(prompt("Nhập số B:"));
let operator = prompt("Nhập phép tính (+, -, *, /):");

let result;

if (operator === "+") {
  result = numberA + numberB;
} else if (operator === "-") {
  result = numberA - numberB;
} else if (operator === "*") {
  result = numberA * numberB;
} else if (operator === "/") {
  if (numberB === 0) {
    console.log("Không thể chia cho 0!");
  } else {
    result = numberA / numberB;
  }
} else {
  console.log("Phép tính không hợp lệ!");
}

if (result !== undefined) {
  console.log(`Kết quả của ${numberA} ${operator} ${numberB} là: ${result}`);
}
