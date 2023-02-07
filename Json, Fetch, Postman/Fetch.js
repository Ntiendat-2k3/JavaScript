// API (URL)-> Application programing interface 
// Cổng giao tiếp giũa các phần mềm 

// Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> JS types -> Render ra giao diện vs HTML 

var postAPI = "https://jsonplaceholder.typicode.com/posts";

     //stream
fetch(postAPI)                    //Same Promise (then)
     .then(function(response){
          return response.json();  // JSON.parse: JSON -> JS   , ben trong tu dong parse cho minh roi
     })
     .then(function(posts){
          // console.log(posts)
          var htmls = posts.map(function(post){
               return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}<p>
               </li>`;
          });
          var html = htmls.join((''));
          document.getElementById('posts-block').innerHTML  = html;
     })
     .catch(function(err){
          console.log('Co loi!');
     });