/**
 * Hàm kiểm tra điều kiện dự thi của sinh viên
 * @param {number} attendance - Tỷ lệ chuyên cần (%)
 * @param {number} gpa - Điểm trung bình (thang điểm 10)
 * @param {boolean} hasPermission - Có giấy phép đặc biệt hay không
 * @returns {boolean} Kết quả đủ điều kiện hay không
 */
function checkExamEligibility(attendance, gpa, hasPermission) {
  // Biểu thức logic kết hợp theo đúng yêu cầu bài toán
  const isEligible = (attendance > 80 && gpa >= 5) || hasPermission;

  return isEligible;
}

// =============================================================
// BỘ DỮ LIỆU CHẠY THỬ (TEST CASES)
// =============================================================

// Trường hợp 1: Chuyên cần 85%, Điểm TB 6.0, Không có giấy phép -> ĐỦ ĐIỀU KIỆN
const sv1 = checkExamEligibility(85, 6.0, false);
console.log(
  "Sinh viên 1:",
  sv1 ? " Đủ điều kiện dự thi" : " Không đủ điều kiện dự thi",
);

// Trường hợp 2: Chuyên cần 75%, Điểm TB 8.0, Không có giấy phép -> KHÔNG ĐỦ (Thiếu chuyên cần)
const sv2 = checkExamEligibility(75, 8.0, false);
console.log(
  "Sinh viên 2:",
  sv2 ? " Đủ điều kiện dự thi" : " Không đủ điều kiện dự thi",
);

// Trường hợp 3: Chuyên cần 50%, Điểm TB 3.0, CÓ giấy phép đặc biệt -> ĐỦ ĐIỀU KIỆN (Nhờ giấy phép)
const sv3 = checkExamEligibility(50, 3.0, true);
console.log(
  "Sinh viên 3:",
  sv3 ? " Đủ điều kiện dự thi" : " Không đủ điều kiện dự thi",
);

// Trường hợp 4: Nhập dữ liệu trực tiếp qua prompt()
function checkFromInput() {
  const attendance = Number(prompt("Nhập tỷ lệ chuyên cần (%):"));
  const gpa = Number(prompt("Nhập điểm trung bình:"));
  const hasPermission = confirm(
    "Bạn có giấy phép đặc biệt không? (OK = Có, Cancel = Không)",
  );

  const eligible = (attendance > 80 && gpa >= 5) || hasPermission;

  if (eligible) {
    alert(" Đủ điều kiện tham gia kỳ thi!");
  } else {
    alert(" Không đủ điều kiện tham gia kỳ thi.");
  }
}

// Un-comment dòng dưới nếu muốn chạy thử bằng hộp thoại trình duyệt
// checkFromInput();
