// main.js

// Import các hàm cần dùng từ file mathUtils.js
import { add, subtract } from "./mathUtils.js";

// Tiến hành gọi hàm và in kết quả ra console
const sum = add(15, 5);
const difference = subtract(15, 5);

console.log("Tổng (15 + 5):", sum); // Output: 20
console.log("Hiệu (15 - 5):", difference); // Output: 10
