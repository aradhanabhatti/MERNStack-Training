function createUser(firstName,lastName,email,age,address){
    // const user=Object.create(createUser.prototype);
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
    // user.about=about;
    // user.is18=userMethod.is18;
    // return user;

}
createUser.prototype.about=function(){
    // console.log(`I am a prototype with no first name`);
    return `my name is ${this.firstName} and age is ${this.age}`
}
createUser.prototype.is18=function(){
    return this.age>=18;
}
// createUser.prototype.about();
// createUser.prototype.is18();

const p1=new createUser();
console.log(p1);

// const obj1=createUser("Aradhana","bhatti","arad@gmail.com",21,"Chandigarh")
// console.log(obj1);
// console.log(obj1.about());
// console.log(obj1.is18());



