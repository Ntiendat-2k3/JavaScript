
var courses = ["Javascript", "PHP", "Ruby"];
/// Co san
var htmls = courses.map(function (course) {
     return `<h2>${course}</h2>`;
});
console.log(htmls.join("")); // <h2>Javascript</h2>  <h2>PHP/h2>   <h2>Ruby</h2>

/// Thiet lap
Array.prototype.myMap = function (callback) {
     var output,
     arrayLength = this.length;
     for (var i = 0; i < arrayLength; i++) {
          var result = callback(this[i], i);
          output.push(result);
     }
     return output;
};
var htmls = courses.myMap(function (course, index) {
     return `<h2>${course}</h2>`;
});
console.log(htmls.join(""));
