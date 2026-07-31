// Cho mảng prices ban đầu
let prices = [100, 200, 300, 400];

let totalPrice = prices.reduce((acc, cur) => {
  return acc + cur;
}, 0);

let finalPayment = 1.1 * totalPrice;
console.log("Tổng thanh toán cuối cùng:", finalPayment);
