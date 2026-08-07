/**
 * Hàm gọi API lấy danh sách người dùng từ server
 */
async function getUsers() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  try {
    console.log("⏳ Đang tải dữ liệu từ server...");

    // 1. Gửi phản hồi HTTP GET đến server bằng fetch()
    const response = await fetch(URL);

    // Kiểm tra xem phản hồi HTTP có thành công không (status code 200-299)
    if (!response.ok) {
      throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
    }

    // 2. Chuyển đổi dữ liệu nhận được từ chuỗi JSON sang Javascript Object/Array
    const users = await response.json();

    // 3. Sử dụng phương thức map() để trích xuất danh sách tên người dùng (name)
    const userNames = users.map((user) => user.name);

    // 4. In danh sách tên ra Console
    console.log(" Danh sách tên người dùng:");
    console.log(userNames);

    /* Mẹo: Bạn cũng có thể in theo dạng bảng đẹp mắt bằng console.table */
    // console.table(users.map(u => ({ ID: u.id, Name: u.name, Email: u.email })));
  } catch (error) {
    // Xử lý các lỗi mạng hoặc lỗi phản hồi từ API
    console.error(" Lỗi khi lấy dữ liệu người dùng:", error.message);
  }
}

// Gọi hàm để thực thi
getUsers();
