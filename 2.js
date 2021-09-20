function findLMV() {
    // Lấy thông tin phần tử có id t1 và gán vào biến str
 var str = document.getElementById('t1').value
 // Kiểm tra chuỗi nhập và trả về các ký tự trong chuỗi chỉ mục từ trái qua phải
 for (i = 0; i < str.length; i++) {
 if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
 || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
 return ("Left most vowel of " + str + " is at location " + (i + 1));
 }
 // nếu nhập không đúng chuỗi thì trả về "No vowels found for string "
 return ("No vowels found for string " + str);
}
function reverse(num) {
 rnum = 0;
 temp = num;
 // kiểm tra dữ liệu truyền vào có hợp lệ không
 if (isNaN(num)) {
// nếu sai trả về "invalid number"
 return "invalid number";
 }
 //điều kiện để thực hiện là số nhập vào khác không
 while (num != 0) {
// ban đầu biến rnum = 0 vì rnum =0*10 =0
 rnum *= 10;
 // kiểm tra và đảo ngược trả về rnum
 rnum += num % 10;
 num -= num % 10;
 num = Math.floor(num / 10);
 }
 return "Reverse of num " + temp + " is " + rnum;
}