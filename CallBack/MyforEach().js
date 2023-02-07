var courses = ["Javascript", "PHP", "Ruby"];

/// Co San
var output = courses.forEach(function(course, index, array)
{
     console.log(course, index, array);
});
console.log(output);
/// NX:  forEach chỉ lặp qua phần tử thực -> khi xây dựng phải dùng vòng lặp "for in"


/// Thiet lap
//: For in không chỉ duyệt qua mỗi ptu hiện hữu trong mảng còn duyệt qua cả ptu nằm trong  _proto_
Array.prototype.testMethod1 = 1;
Array.prototype.MyforEach = function(callback)
{
     for (var index in this){
          if (this.hasOwnProperty(index)) {
          // console.log("index: ", index);
                                   // index: ,0
                                   //index: ,1
                                   //index: ,2
               callback(this[index], index, this);
          }
          //index: ,testMethod1     _proto_     đã đc loại bỏ do có hasOwnProperty(loại bỏ những ptu không thuộc trong Mảng)
          //index: ,MyforEach       _proto_     đã đc loại bỏ do có hasOwnProperty(loại bỏ những ptu không thuộc trong Mảng)
     } 
}

courses.MyforEach(function(course, index, array){
     console.log(course, index, array);
});