var courses = [
     {
          name: "JS",
          coin: 680,
          isFinish: true,
     },
     {
          name: "PHP",
          coin: 720,
          isFinish: false,
     },
     {
          name: "Ruby",
          coin: 710,
          isFinish: false,
     },
];
//some : true / false  dùng để kiểm tra tối thiểu 1 giá trị thảo mãn

var result =  courses.some(function(course, index, array)
{
     return course.isFinish === true;
});
console.log(result);   // true


/// Thiet lap 
Array.prototype.MySome() = function(callback)
{
     for(var index in this)
     {
          if(this.hasOwnProperty(index))
          {
               if (callback(this[index], index, this)) {
                    return true;
               }
          }
     }
     return false;
}

var result = courses.MySome(function(course, index, array)
{
     return course.isFinish === true;
});
console.log(result);   // true