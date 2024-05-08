// arrow function

const obj1={
    firstName:"Aradhana",
    age:21,
    about:()=>{

        console.log(this);
        console.log(`${this.firstName}`);
    }
}
obj1.about();