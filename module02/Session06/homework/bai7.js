/**
 * Hàm mô phỏng công việc bất đồng bộ
 * @param {boolean} shouldSucceed - Cờ điều khiển tác vụ thành công hay thất bại
 * @returns {Promise<string>}
 */
function simulateTask(shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Tác vụ bắt đầu... Đang chờ 2 giây.");

    setTimeout(() => {
      if (shouldSucceed) {
        // Chuyển Promise sang trạng thái Fulfilled (Thành công)
        resolve("Task Completed!");
      } else {
        // Chuyển Promise sang trạng thái Rejected (Thất bại)
        reject(new Error("Task Failed: Đã xảy ra lỗi hệ thống!"));
      }
    }, 2000);
  });
}

// =============================================================
// THƯỜNG DÙNG: Trường hợp tác vụ thành công
// =============================================================
console.log("--- TEST 1: Tác vụ thành công ---");

simulateTask(true)
  .then((result) => {
    // Chạy vào đây khi Promise được resolve()
    console.log(" Thành công:", result);
  })
  .catch((error) => {
    // Chạy vào đây khi Promise bị reject()
    console.error(" Thất bại:", error.message);
  })
  .finally(() => {
    console.log(" Tác vụ 1 đã kết thúc.\n");
  });

// =============================================================
// THỬ NGHỆM: Trường hợp tác vụ thất bại (để kiểm tra .catch)
// Un-comment đoạn bên dưới để chạy thử trường hợp Reject
// =============================================================

/*
setTimeout(() => {
  console.log("--- TEST 2: Tác vụ thất bại ---");

  simulateTask(false)
    .then((result) => {
      console.log(" Thành công:", result);
    })
    .catch((error) => {
      console.error(" Thất bại:", error.message);
    })
    .finally(() => {
      console.log(" Tác vụ 2 đã kết thúc.");
    });
}, 3000);
*/
