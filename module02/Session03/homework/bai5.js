/**
 * Hàm yêu cầu người dùng nhập số từ 1 đến 10 bằng do-while
 */
function getValidNumber() {
  let userInput;
  let number;

  // Vòng lặp do-while đảm bảo khối lệnh trong 'do' luôn được chạy ít nhất 1 lần
  do {
    // 1. Yêu cầu nhập dữ liệu từ người dùng
    userInput = prompt("Nhập một số trong khoảng từ 1 đến 10:");

    // Xử lý trường hợp người dùng nhấn nút Cancel (Hủy)
    if (userInput === null) {
      alert("Bạn đã hủy thao tác.");
      return;
    }

    // Chuyển đổi dữ liệu chuỗi sang dạng số
    number = Number(userInput);

    // 2. Kiểm tra nếu nhập sai (NaN hoặc nằm ngoài khoảng 1 đến 10)
    if (isNaN(number) || number < 1 || number > 10) {
      alert(
        "⚠️ Số nhập vào không hợp lệ! Vui lòng nhập một số nằm trong khoảng [1 - 10].",
      );
    }

    // 3. Điều kiện lặp: Tiếp tục lặp LẠI nếu số KHÔNG hợp lệ (nhỏ hơn 1 hoặc lớn hơn 10 hoặc không phải là số)
  } while (isNaN(number) || number < 1 || number > 10);

  // 4. Kết thúc vòng lặp khi người dùng đã nhập đúng
  console.log(" Số hợp lệ bạn đã nhập là:", number);
  alert(` Cảm ơn bạn! Bạn đã nhập số hợp lệ: ${number}`);
}

// Chạy hàm
getValidNumber();
