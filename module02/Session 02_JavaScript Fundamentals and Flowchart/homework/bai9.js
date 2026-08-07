// 1. Khai báo hằng số hệ thống (Sử dụng const)
const ADMIN_USER = "admin";
const ADMIN_PASS = "123456";

// 2. Nhận dữ liệu đầu vào từ người dùng qua prompt()
const inputUser = prompt("Nhập tên đăng nhập (Username):");
const inputPass = prompt("Nhập mật khẩu (Password):");

// 3. Sử dụng toán tử so sánh bằng nghiêm ngặt (===) và toán tử logic AND (&&)
const isAuthenticated = inputUser === ADMIN_USER && inputPass === ADMIN_PASS;

// 4. Kiểm tra điều kiện và thông báo kết quả bằng alert()
if (isAuthenticated) {
  alert(" Đăng nhập thành công! Chào mừng Admin.");
} else {
  alert(" Đăng nhập thất bại! Tên đăng nhập hoặc mật khẩu không đúng.");
}
