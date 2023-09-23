// const tinderUser = new Object();  single ton object 
const tinderUser = {};  // non single ton object
 tinderUser.id = "123abc",
 tinderUser.name = "Anil",
 tinderUser.IsLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userFullName :{

            firstName : "Anil",
            lastName : "Chauhan"
        }

    }
}
// console.log(regularUser.fullName);



const obj1 = {1:"a1" , 2:"b1" ,3:"c1"};
const obj2 = {4:"a2" , 5:"b2" ,6:"c2"};

// const obj3 = {obj1 , obj2};

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1,...obj2};
console.log(obj3);


const user =  [
    {
        id : 1,
        email : "one.@gmail.com"
    },
    {
        id : 2,
        email : "two.@gmail.com"
    },
    {
        id : 3,
        email : "three.@gmail.com"
    },
    {
        id : 4,
        email : "four.@gmail.com"
    },
    {
        id : 5,
        email : "five.@gmail.com"
    }

]

console.log(user[0].email);
console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

 // object destructuring

 const course = {

    CourseName : "JS in hindi",
    CoursePrice: 1000,
    CourseInstructor : "Hitesh"
 }

//  console.log(course.CourseInstructor);

const {CoursePrice,CourseName ,CourseInstructor:instructor} = course;

console.log(CoursePrice);
console.log(CourseName);
console.log(instructor);

// destructuring example

// const navbar =({compmanyName})=>{

// }
// navbar(compmanyName="Xpansion");