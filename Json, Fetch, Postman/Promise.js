// - Sync   :  đồng bộ
// - Async  : bất đồng bộ 

// Async : setTimeout, setInterval, fetch, XMLHttpRequest,  file reading, 

/// Promise sinh ra để giải quyết vấn đề bất đồng bộ , trước có Callback nhưng đôi khi xảy ra tình trạng Callback hell gây code rối , khó nhìn , khó hiểu 
/// Đc sử dụng trong những bài về bất đồng bộ

//sleep 
setTimeout(function()
{
     console.log(1);
},1000)
console.log(2);

/// Pain
// Callback hell 
// Pyramid of doom 

setTimeout(function()
{
     console.log(1);
     setTimeout(function () {
          console.log(2);
          setTimeout(function () {
               console.log(3);
               setTimeout(function () {
                    console.log(4);
               }, 1000);
          }, 1000);
     }, 1000);
},1000);


/// Concept 
//1. new Promise 
//2. Executor

// 1. Pendding
//2.1 Fulfilled
//2.2 Rejected
var promise = new Promise(
     // Executor
     function(resolve, reject){
          //Logic 
          // Thanh cong : resolve()
          //That bai: reject()
          resolve([
               {
                    id: 1,
                    name: 'JS',
               }
          ]);
     }
);

promise
     .then(function(course) {             // resolve
          console.log(course);
     })
     .catch(function() {           // reject
          console.log('Failure!');
     })
     .finally(function() {          // 1 trong 2 thuc hien xong
          console.log('Done!');
     });
// 0:  (2) {id: 1, name: "JS"}
// Done!

