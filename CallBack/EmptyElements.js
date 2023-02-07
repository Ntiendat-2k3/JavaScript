var courses = ["Javascript", "PHP", "Ruby"];
courses.length = 10;

// Nếu sử dụng for thường sẽ bị dư thừa do chỉ có 3 ptu thực, 7 ptu k tồn tại 
/// ==> sử dụng for in để tiết kiệm 

for(var index in courses)
{
     console.log(courses[index]); // chi lap qua ptu thuc
}
