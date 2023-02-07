//  Callback?

// là hàm (function) được truyền qua đối số
// khi gọi hàm khác

//1. là hàm
//2. Được truyền qua đối số
//3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param)
{
     console.log(typeof param)   // -> function
     if (typeof param === 'function') {
          param();   //:  <=> myCallback()
     }
}
function myCallback(){ }
myFunction(myCallback);


