function sc() {
    // Hiện bảng nhập khoảng
    rng = prompt('Enter the range');
    res = rng.split("-");
    //Kiểm tra độ dài điền có khác 2 không nếu khác hiện thông báo lỗi
    if (res.length != 2) {
    alert("invalid range ");
    return;
    }
    //ép kiểu về dạng số
    first = parseInt(res[0]);
    second = parseInt(res[1]);
    //kiểm tra nếu số đầu lớn hơn số sau thì thông báo lỗi, ngược lại thì thực hiện lệnh
    if (first > second) {
    alert("invalid range ");
    return;
    }
    //tạo bảng
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    //thực hiện vòng lặp, nếu sô sau nhỏ hơn số trước thực hiện tính bình phương và lập phương

    for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }
    document.write(str);
   }