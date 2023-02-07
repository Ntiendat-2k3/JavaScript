var promise = new Promise(
     // Executor
     function (resolve, reject) {
          resolve([
               {
                    id: 1,
                    name: "JS",
               },
          ]);
     }
);
// Case1  : Normal
promise
     .then(function () {
          return 1;
     })
     .then(function (data) {
          console.log(data);  // 1
          return 2;
     })
     .then(function (data) {
          console.log(data)  // 2
          return 3;
     })
     /// Chờ nhau để thực hiện  ---> Callback nhưng nhìn gọn gàng dễ hơn

     .catch(function () {
          // reject
          console.log("Failure!");
     })
     .finally(function () {
          // 1 trong 2 thuc hien xong
          console.log("Done!");
     });

//Case2  : return  promise, cũng then đc
promise
     .then(function() {
          return new Promise(function(resolve){
               setTimeout(function(){
                    resolve([1,2,3]);
               }, 3000);
          });
     })
     .then(function(data){
          console.log(data);  // 3s  in ra [ 1, 2, 3]
     })

