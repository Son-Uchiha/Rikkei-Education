// Khai báo mảng tasks để lưu danh sách công việc (dạng mảng rỗng ban đầu)
let tasks = [];

// 1. Viết hàm addTask(title) để thêm công việc mới
function addTask(title) {
  tasks.push(title);
  console.log(`Đã thêm công việc: "${title}"`);
}

// 2. Viết hàm removeTask(index) để xóa công việc theo vị trí
function removeTask(index) {
  // Kiểm tra xem vị trí (index) có hợp lệ không trước khi xóa
  if (index >= 0 && index < tasks.length) {
    let removedItem = tasks.splice(index, 1);
    console.log(`Đã xóa công việc: "${removedItem}"`);
  } else {
    console.log("Vị trí công việc không hợp lệ!");
  }
}

// 3. Viết hàm displayTasks() để in danh sách kèm số thứ tự (index + 1)
function displayTasks() {
  console.log("--- DANH SÁCH CÔNG VIỆC ---");
  if (tasks.length === 0) {
    console.log("Danh sách trống!");
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  console.log("---------------------------");
}

// --- Thử nghiệm kiểm tra chương trình ---
addTask("Học lập trình JavaScript");
addTask("Làm bài tập về Array & Function");
addTask("Đẩy code lên GitHub");

displayTasks();

// Xóa công việc ở vị trí thứ 2 (index = 1: "Làm bài tập về Array & Function")
removeTask(1);

// Hiển thị lại danh sách sau khi xóa
displayTasks();
