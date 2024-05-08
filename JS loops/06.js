// create object from function
const userMethod={
    about:function(){
        return `my name is ${this.firstName} and age is ${this.age}`
    },
    is18:function(){
        return this.age>=18;
    }
    // return user;

}

function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethod.about;
    user.is18=userMethod.is18;
    return user;

}
// now lets  send data to function and get our object

const obj1=createUser("Aradhana","bhatti","arad@gmail.com",21,"Chandigarh")
console.log();
console.log(obj1);
const myData=obj1.about();
console.log(myData);
console.log(obj1.is18());


// const user1={
//     firstName:"Aradhana",
//     lastName:"bhatti",
//     email:"aradhana11@gmail.com",
//     age:23,
//     address:"Mohali",
//     about:function(){
//         return `My name is ${this.firstName} and my age is ${this.age}`
//     },
//     is18:function(){
//         return this.age>=18
//     }
// }
// const aboutMe=user1.about();
// console.log(aboutMe);

// for multiple objects,we need a function
// function---create object
// 2. add key value pair 
// 3. function will return the object
