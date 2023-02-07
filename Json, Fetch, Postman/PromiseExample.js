var users = [
     {
          id: 1,
          name: 'Tien Dat',
     },
     {
          id: 2,
          name: 'Tonny',
     },
     {
          id: 3,
          name: 'John',
     },
];
var comments = [
     {
          id: 1,
          user_id: 1,
          content: 'Sao anh dep trai the !',
     },
     {
          id: 2,
          user_id: 2,
          content: 'Cung binh thuong em oi !',
     },
     {
          id: 3,
          user_id: 3,
          content: 'Dau anh dap zai kinh ^^ !',
     },
];

//1. Lấy comments
//2. Từ comments lấy ra user_id
//3. từ user_id lấy ra user tương ứng

// Fake API 
function getUserByIds(userIds){
     return new Promise(function(resolve){
          var result = users.filter(function(user){
               return userIds.includes(user.id);
          });
          setTimeout(() => {
               resolve(result);
          }, 1000);
     }, 1000);
}

function getComments()
{
     return new Promise(function(resolve){
          setTimeout(function()
          {
               resolve(comments);
          }, 2000)
     })
}
// Lay comment
getComments()
     .then(function(comments){
          var userIds = comments.map(function(comment){
               return comment.user_id;
          });
          // console.log(userIds);

          //Lay user id
          return getUserByIds(userIds)
               .then(function(users){
                    // console.log(users);    
                    return {
                         users: users,
                         comments: comments,
                    }
               });
     })
     .then(function(data){
          // console.log(data);
          var commentBlock = document.getElementById('comment-block');

          var html = ''; 
          data.comments.forEach(function(comment){
               var user = data.users.find(function(user){
                    return user.id === comment.user_id;
               });
               html += `<li>${user.name}: ${comment.content}</li>`;
          });

          commentBlock.innerHTML = html;
     });

// Callback hell 
// Promise hell 
