/**
 * Hàm tính tổng của số lượng tham số không giới hạn
 * @param  {...number} numbers - Danh sách các số truyền vào
 * @return {number} Tổng của tất cả các số
 */
function sumAllNumbers(...numbers) {
  // Rest parameters (...numbers) sẽ gom tất cả đối số truyền vào thành 1 mảng 'numbers'
  return numbers.reduce((total, current) => total + current, 0);
}

// -------------------------------------------------------------
// BÀI TEST: Gọi hàm với các bộ số khác nhau và in kết quả ra Console
// -------------------------------------------------------------

console.log("Tổng (1, 2, 3):", sumAllNumbers(1, 2, 3));
// Kết quả: 6

console.log("Tổng (10, 20, 30, 40, 50):", sumAllNumbers(10, 20, 30, 40, 50));
// Kết quả: 150

console.log("Tổng (5):", sumAllNumbers(5));
// Kết quả: 5

console.log("Không truyền tham số:", sumAllNumbers());
// Kết quả: 0
