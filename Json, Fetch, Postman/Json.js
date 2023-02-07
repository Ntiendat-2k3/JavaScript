//!1. Json : là một định dạng dữ liệu "(chuỗi)"
//2. JavaScript Object Notation
//3. JSON: Number, Boolean, Null, Array, Object

// Mã hóa(EnCode) / Giải mã(DeCode)
// Stringify:    JS -> JSON
// Parse     :     JSON -> JS

var json = '["JS", "PHP"]';
// var json = '{"name":"Tien Dat", "age":18}';
console.log(JSON.parse(json));  // Chuyển từ Json về JS

console.log(JSON.stringify(['JS', 'PHP']));  // Chuyển từ JS về Json   ["JS", "PHP"]  -> chuỗi json, không phải mảng


