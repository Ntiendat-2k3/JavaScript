// -CRUD 
// - Create: Tạo mới      -> POST
// - Read:    lấy dữ liệu  -> GET
// - Update: Chỉnh sửa   -> PUT / PATCH 
// - Delete: Xóa             -> DELETE


//Postman làm việc với REST API 
// Giúp đỡ phải chỉnh code xong fetch để gọi(xem Json_server) , thao tác trực tiếp trên postman để thêm, sửa, xóa -> tiện lợi


var courseApi = "http://localhost:3000/courses";
let cancelUpdateBtn = document.querySelector("#cancel-update");
let updateBtn = document.querySelector("#update");

function start(){
     // getCourses(function(courses){
     //      // console.log(courses);
     //      renderCourses(courses);
     // });
     //or 
     cancelUpdateBtn.style.display = "none";
     updateBtn.style.display = "none";

     getCourses(renderCourses);

     handleCreateForm();
}
start();


//Function
function getCourses(Callback){
     fetch(courseApi)
          .then(function(response){
               return response.json();
          })
          .then(Callback);
}
function createCourse(data, Callback){
     var options = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
     };
     fetch(courseApi, options)
          .then(function(response){
               response.json();
          })
          .then(Callback);
}
function handleDeleteCourse(id){
     var options = {
          method: 'DELETE',
          headers: {
               'Content-Type': 'application/json'
          },
     };
     fetch(courseApi + '/' + id, options)   // Vi tk postman xoa , sua phai co  "/id"
          .then(function(response){
               response.json();
          })
          .then(function(){
               // getCourses(renderCourses); moi lan xoa call lai API --> khong nen
               var courseItem = document.querySelector('.course-item-' + id);
               if (courseItem) {
                    courseItem.remove();
               }
          });
}
function handleUpdate(course) {
     let {id, name, desc} = course.dataset
     let nameCourse = document.querySelector('input[name="name"]')
     let descCourse = document.querySelector('input[name="description"]')

     nameCourse.value = name
     descCourse.value = desc

     showBtnUpdate(true)

     cancelUpdateBtn.onclick = () => {
          showBtnUpdate(!true)
          nameCourse.value = ''
          descCourse.value = ''
     }

     updateBtn.onclick = () => {
          let formData = {
               name: nameCourse.value,
               description: descCourse.value
          }

          let options = {
               method: "PUT",
               headers: {'Content-type': 'application/json'},
               body: JSON.stringify(formData)
          }

          fetch(coursesApi + id, options)
               .then(response => response.json())
               .then(() => {
                    nameCourse.value = ''
                    descCourse.value = ''
                    showBtnUpdate(!true)
                    getCourses(renderCourses)
               })
     }
}
function renderCourses(courses){   // file db.json
     var listCoursesBlock = document.querySelector("#list-courses");
     var htmls = courses.map(function(course){
          return `
               <li class="course-item-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <p>${course.power}</p>
                    <button onclick="handleDeleteCourse(${course.id})">&times;</button>
               </li>
          `;
     });
     listCoursesBlock.innerHTML = htmls.join('');
}
function handleCreateForm(){
     var createBtn = document.querySelector('#create');
     createBtn.onclick = function(){
          var name = document.querySelector('input[name="name"]').value;
          var Description = document.querySelector('input[name="description"]').value;
          var Power = document.querySelector('input[name="power"]').value;
          // console.log(name);

          var formData = {
               name: name,
               description: Description,
               power: Power,
          }
          createCourse(formData, function(){
               getCourses(renderCourses); // Không phải load lại trang để hiện thị sau k push , thêm hàm này để máy tự load
          });
     }
}
