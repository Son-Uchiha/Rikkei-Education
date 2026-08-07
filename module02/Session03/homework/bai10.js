/**
 * Trò chơi đoán số ngẫu nhiên từ 1 đến 100
 */
function playGame() {
  // 1. Máy tính sinh số ngẫu nhiên từ 1 đến 100
  // Math.random() trả về số [0, 1) -> nhân 100 được [0, 100) -> làm tròn xuống Math.floor() được 0-99 -> cộng 1 ra 1-100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const maxTries = 5;
  let isWon = false;

  alert(
    `🎯 Trò chơi bắt đầu! Bạn có tối đa ${maxTries} lần đoán số ngẫu nhiên từ 1 đến 100.`,
  );

  // 2. Sử dụng vòng lặp For cho tối đa 5 lần đoán
  for (let i = 1; i <= maxTries; i++) {
    // Lấy gợi ý lần thử hiện tại
    const userInput = prompt(
      `[Lần ${i}/${maxTries}] Nhập số bạn đoán (từ 1 đến 100):`,
    );

    // Kiểm tra nếu người dùng nhấn Cancel (Hủy)
    if (userInput === null) {
      alert("Bạn đã thoát trò chơi.");
      return;
    }

    // Chuyển đổi dữ liệu nhập vào thành kiểu Số
    const guessNumber = Number(userInput);

    // Kiểm tra tính hợp lệ của đầu vào
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      alert("⚠️ Vui lòng nhập một số hợp lệ trong khoảng từ 1 đến 100!");
      i--; // Không tính lần đoán vi phạm quy tắc
      continue;
    }

    // 3. So sánh và kiểm tra kết quả
    if (guessNumber === randomNumber) {
      alert(
        `🎉 Chúc mừng! Bạn đã đoán chính xác số ${randomNumber} ở lần đoán thứ ${i}!`,
      );
      isWon = true;
      break; // Đoán đúng -> Dùng break thoát khỏi vòng lặp lập tức
    } else if (guessNumber > randomNumber) {
      alert(`📉 Số bạn đoán (${guessNumber}) quá LỚN!`);
    } else {
      alert(`📈 Số bạn đoán (${guessNumber}) quá NHỎ!`);
    }
  }

  // 4. Kiểm tra điều kiện thua cuộc sau khi hết 5 lượt
  if (!isWon) {
    alert(
      `💥 Game Over! Bạn đã hết 5 lần đoán. Số đúng của máy tính là: ${randomNumber}`,
    );
  }
}

// Gọi hàm để chơi game
playGame();
