// =============================================================
// PHẦN 1: TẬP TÍNH HOISTING VỚI 'var'
// =============================================================

console.log("1. Trước khi khai báo, giá trị của message là:", message);
// Output: undefined (không bị lỗi Crash chương trình)

var message = "Hello";

console.log("2. Sau khi khai báo, giá trị của message là:", message);
// Output: "Hello"

// =============================================================
// PHẦN 2: PHẠM VI CỦA HÀM (FUNCTION SCOPE)
// =============================================================

function testScope() {
  var secretMessage = "Đây là biến bên trong hàm";
  console.log("3. Bên trong hàm:", secretMessage); // Chạy bình thường
}

// Gọi hàm
testScope();

// Thử truy cập biến 'secretMessage' từ bên ngoài hàm
try {
  console.log("4. Bên ngoài hàm:", secretMessage);
} catch (error) {
  console.error("4. Lỗi khi truy cập ngoài hàm:", error.message);
  // Output: ReferenceError: secretMessage is not defined
}
