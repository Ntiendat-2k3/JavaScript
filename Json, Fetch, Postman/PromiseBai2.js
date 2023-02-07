function sleep(ms)
{
     return new Promise((resolve) => 
     {
          setTimeout(resolve, ms);
     });
}

sleep(1000) // vì return về 1 promise nên chính nó cũng là 1 promise
     .then(function(){
          console.log(1);
          return sleep(1000);   // return 1 promise nen 1s sau then tiep theo moi chay
     })
     .then(() => {
          console.log(2);
          return sleep(1000);
     })
     .then(() => {
          console.log(3);
          return sleep(1000);
     })
     .then(() => {
          console.log(4);
          return sleep(1000);
     })
/// K bi Hell

