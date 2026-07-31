const Sum = (a, b) => {
  return a + b;
};

let result = Sum(10, 20);
console.log("Tổng kết quả là:", result);

// Khởi tạo danh sách công việc (mảng rỗng)
let tasks = [];

// 1. Thêm 3 việc vào danh sách (sử dụng push)
tasks.push(
  "Làm bài tập JavaScript",
  "Đọc sách lập trình",
  "Ôn tập cấu trúc dữ liệu",
);

// 2. Xóa 1 việc (ví dụ xóa công việc cuối cùng vừa thêm bằng pop)
tasks.pop();

// 3. Hiển thị kết quả cuối cùng ra Console
console.log("Danh sách công việc còn lại:", tasks);
