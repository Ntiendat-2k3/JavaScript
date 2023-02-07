var courses = [
     {
          name: "JS",
          coin: 680,
          isFinish: true,
     },
     {
          name: "PHP",
          coin: 720,
          isFinish: true,
     },
     {
          name: "Ruby",
          coin: 710,
          isFinish: false,
     },
];
// every: kiểm tra "tối đa" xem tất cả thảo mãn hay không

var result =  courses.every(function(course, index, array)
{
     return course.isFinish === true;
});
console.log(result);   // false


/// Thiet lap 
Array.prototype.MyEvery() = function(callback)
{
     var output = true;
     for(var index in this)
     {
          if(this.hasOwnProperty(index))
          {
               var result = callback(this[index], index, this);
               if (!result) {
                    output = false;
                    break;
               }
          }
     }
     return output;
}

var result = courses.MyEvery(function(course, index, array)
{
     return course.coin > 500;
});
console.log(result);  // true