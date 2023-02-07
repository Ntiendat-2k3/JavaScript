var courses = ["Javascript", "PHP", "Ruby"];

var courses =[
     {
          name: 'JS',
          coin:680
     },
     {
          name: 'PHP',
          coin:720
     },
     {
          name: 'Ruby',
          coin:710
     }
];
var filter = courses.filter(function(course, index, array)
{
     return course.coin > 700;
});
console.log(filter);   // 0: (2) {name: "PHP", coin: 720}
                              //  1: (2) {name: "Ruby", coin: 710}


/// Thiet lap 
Array.prototype.Myfilter() = function(callback)
{
     var output = [];
     for(var index in this)
     {
          if (this.hasOwnProperty(index)) {   // Loai Myfilter
               var result = callback(this[index], index, this);
               if (result) {
                    output.push(this[index]);
               }
          }
     }
     return output;
}
courses.Myfilter(function(course, index, array){
     console.log(course, index, array);
     return course.coin  > 700;
});