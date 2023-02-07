
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all    : giup chay song song promise (khi bất đồng bộ mà không phụ thuộc vào nhau)

var promise = Promise.resolve('Success!');   // luon thanh cong

promise
     .then(function(result){
          console.log('result: ', result);   //: Neu return ve 1 promise reject thi moi chay vao catch , khong co luon thanh cong
     })
     .catch(function(err){
          console.log('err: ', err);
     })

// Promise.all : giúp chạy song song , chỉ mất 5s khi cả chạy 2 hàm 
var promise1 = new Promise(function(resolve){
     setTimeout(function(){
          resolve([1]);
     }, 2000)
});
var promise2 = new Promise(function(resolve){
     setTimeout(function(){
          resolve([2, 3]);
     }, 5000)
});

Promise.all([promise1, promise2]) 
     .then(function (result) {
          console.log(result); // (2) [Array(1), Array(2)]
          var result1 = result[0];
          var result2 = result[1];
          // console.log(result1.concat(result2));    (3) [(1, 2, 3)];
          return result1.concat(result2);  //: Nối  mảng
     });
// Or  (ES6)
// Promise.all([promise1, promise2])
//      .then(function([result1, result2]){
//           console.log(result1.concat(result2));
//      })
//output:  (3) [(1, 2, 3)]



var promise1 = new Promise(function(resolve){
     setTimeout(function(){
          resolve([1]);
     }, 2000)
});
var promise2 = Promise.reject('Co loi!');
Promise.all([promise1, promise2])
     .then(function([result1, result2]){
          console.log(result1.concat(result2));
     })
     .catch(function(err){
          console.log(err);
     });
// output: Co loi!