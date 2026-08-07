/**
 * Chương trình lọc số và tính tổng có điều kiện
 */
function processNumbers() {
  let currentSum = 0;
  const printedNumbers = [];

  console.log("=== BẮT ĐẦU VÒNG LẶP DỰA TRÊN ĐIỀU KIỆN ===");

  for (let i = 1; i <= 50; i++) {
    // 1. Dùng continue: Bỏ qua các số chia hết cho 5
    if (i % 5 === 0) {
      continue; // Bỏ qua phần code phía dưới và nhảy sang vòng lặp tiếp theo
    }

    // 2. Dùng break: Dừng chương trình nếu tổng các số đã in vượt quá 200
    // (Kiểm tra xem nếu cộng thêm số 'i' này thì tổng có vượt quá 200 hay không)
    if (currentSum + i > 200) {
      console.log(
        `\n🛑 Đã dừng vòng lặp tại i = ${i} vì tổng chuẩn bị vượt quá 200 (Tổng hiện tại: ${currentSum}).`,
      );
      break; // Thoát hoàn toàn khỏi vòng lặp
    }

    // Nếu thỏa mãn các điều kiện trên: Tiến hành in và cộng dồn
    currentSum += i;
    printedNumbers.push(i);
  }

  // 3. Hiển thị kết quả ra Console
  console.log(" Danh sách các số thỏa mãn:", printedNumbers.join(", "));
  console.log(" Tổng cuối cùng thu được:", currentSum);
  console.log(" Số lượng số đã được nhận:", printedNumbers.length);
}

// Chạy hàm
processNumbers();
