/**
 * Hàm kiểm tra điều kiện vay vốn ngân hàng
 * @param {number} salary - Lương hàng tháng (triệu VNĐ)
 * @param {number} age - Độ tuổi
 * @param {boolean} hasBadDebt - Trạng thái nợ xấu (true nếu có, false nếu không)
 * @returns {boolean} Kết quả đủ điều kiện vay hay không
 */
function checkLoanEligibility(salary, age, hasBadDebt) {
  // Biểu thức logic gộp gọn gàng, kiểm tra tất cả điều kiện cùng lúc
  const isEligible = salary > 15 && age >= 18 && age <= 60 && !hasBadDebt;

  return isEligible;
}

// =============================================================
// THỰC THI & NHẬP DỮ LIỆU TỪ NGƯỜI DÙNG
// =============================================================

function processLoanApplication() {
  alert("=== CHƯƠNG TRÌNH XÉT DUYỆT HỒ SƠ VAY VỐN ===");

  // 1. Nhập dữ liệu đầu vào
  const salary = Number(
    prompt("Nhập số tiền lương hàng tháng của bạn (triệu VNĐ):"),
  );
  const age = Number(prompt("Nhập độ tuổi của bạn:"));

  // prompt nhận chuỗi nhập vào, kiểm tra nếu nhập "YES" hoặc "Y" (không phân biệt hoa thường)
  const badDebtInput = prompt("Bạn có nợ xấu không? (Nhập 'Yes' hoặc 'No'):");
  const hasBadDebt = badDebtInput?.trim().toLowerCase() === "yes";

  // 2. Validate dữ liệu đầu vào đơn giản (Guard Clause)
  if (isNaN(salary) || isNaN(age) || salary < 0 || age < 0) {
    alert("⚠️ Dữ liệu lương hoặc tuổi nhập vào không hợp lệ!");
    return;
  }

  // 3. Xử lý logic tính toán
  const canBorrow = checkLoanEligibility(salary, age, hasBadDebt);

  // 4. Thông báo kết quả
  if (canBorrow) {
    alert("🎉 HỒ SƠ ĐƯỢC DUYỆT: Bạn đủ điều kiện vay vốn!");
  } else {
    alert("❌ HỒ SƠ BỊ TỪ CHỐI: Bạn chưa đủ điều kiện vay vốn.");
  }
}

// Chạy ứng dụng
processLoanApplication();
