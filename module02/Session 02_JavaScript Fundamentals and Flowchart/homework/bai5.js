// 1. Khai báo biến
let numberA = 5; // Kiểu dữ liệu: Number
let stringB = "5"; // Kiểu dữ liệu: String

console.log("=== PHÂN BIỆT TOÁN TỬ == VÀ === ===");

// 2. So sánh bằng toán tử == (Loose Equality / So sánh tương đối)
// Toán tử == tự động ép kiểu stringB ("5") thành kiểu number (5) trước khi so sánh
console.log("numberA == stringB :", numberA == stringB);
// Output: true

// 3. So sánh bằng toán tử === (Strict Equality / So sánh tuyệt đối)
// Toán tử === so sánh cả GIÁ TRỊ lẫn KIỂU DỮ LIỆU (Number !== String)
console.log("numberA === stringB :", numberA === stringB);
// Output: false

// 4. Sử dụng confirm() để hỏi xác nhận từ người dùng
// confirm() trả về true nếu chọn "OK", và false nếu chọn "Cancel"
const isUnderstood = confirm("Bạn đã hiểu bài chưa?");

console.log("Trạng thái xác nhận của người dùng:", isUnderstood);

if (isUnderstood) {
  console.log(" Tuyệt vời! Bạn đã nắm vững sự khác nhau giữa == và ===.");
} else {
  console.log(" Bạn có thể xem lại bảng giải thích chi tiết bên dưới nhé!");
}
