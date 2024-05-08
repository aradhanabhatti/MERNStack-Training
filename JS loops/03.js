// call functions

const user1={
    firstName:"Aradhana",
    age:23,
    about: function(){
        console.log(`${this.firstName},${this.age}`);
    }
}

const user2={
    firstName:"Harsh",
    age:21
}
// console.log(user1);
// console.log(user2);
user1.about.call(user2);