/**
 * 1. Hàm mô phỏng tác vụ bất đồng bộ (giữ nguyên từ Bài 7)
 * @param {boolean} shouldSucceed - Cờ điều khiển tác vụ thành công hay thất bại
 * @returns {Promise<string>}
 */
function simulateTask(shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Tác vụ bắt đầu... Đang xử lý (chờ 2 giây)");

    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Task Completed!");
      } else {
        reject(new Error("Task Failed: Đã xảy ra lỗi hệ thống!"));
      }
    }, 2000);
  });
}

/**
 * 2. Hàm thực thi sử dụng async / await
 */
async function runTask(shouldSucceed = true) {
  try {
    // Từ khóa 'await' tạm dừng hàm runTask cho đến khi Promise giải quyết xong
    const result = await simulateTask(shouldSucceed);

    // Nếu Promise thành công (resolve), kết quả được gán vào biến result
    console.log(" Thành công:", result);
  } catch (error) {
    // Nếu Promise thất bại (reject), luồng chạy lập tức nhảy vào khối catch
    console.error(" Bắt được lỗi:", error.message);
  } finally {
    console.log(" Hoàn tất quá trình xử lý tác vụ.\n");
  }
}

// =============================================================
// KIỂM TRA KẾT QUẢ
// =============================================================

async function main() {
  console.log("=== CHẠY THỬ TRƯỜNG HỢP THÀNH CÔNG ===");
  await runTask(true);

  console.log("=== CHẠY THỬ TRƯỜNG HỢP THẤT BẠI ===");
  await runTask(false);
}

main();
