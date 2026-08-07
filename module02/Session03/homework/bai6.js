/**
 * Hàm vẽ hình chữ nhật bằng dấu sao (*) ra Console
 * @param {number} width - Chiều rộng (số cột)
 * @param {number} height - Chiều cao (số dòng)
 */
function drawRectangle(width, height) {
  console.log(`=== HÌNH CHỮ NHẬT SAO (${width} x ${height}) ===\n`);

  // 1. VÒNG LẶP NGOÀI: Quản lý từng DÒNG (chiều cao h)
  for (let i = 1; i <= height; i++) {
    let rowContent = ""; // Chuỗi chứa các dấu sao trên dòng hiện tại

    // 2. VÒNG LẶP TRONG: Quản lý từng CỘT (chiều rộng w)
    for (let j = 1; j <= width; j++) {
      rowContent += "* "; // Ghép nối từng dấu sao vào dòng
    }

    // 3. In toàn bộ dòng ra Console sau khi vòng lặp trong chạy xong
    console.log(rowContent);
  }
}

// =============================================================
// NHẬP DỮ LIỆU TỪ NGƯỜI DÙNG & THỰC THI
// =============================================================

function startDrawing() {
  const w = Number(prompt("Nhập chiều rộng (width):"));
  const h = Number(prompt("Nhập chiều cao (height):"));

  // Kiểm tra tính hợp lệ của dữ liệu đầu vào
  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    alert("⚠️ Vui lòng nhập số nguyên dương hợp lệ!");
    return;
  }

  drawRectangle(w, h);
}

// Chạy ứng dụng
startDrawing();
