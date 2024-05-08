const person={
    firstName:"ara",
    lastName:"Bhatti",
    age:21,
    gender:"Female",
    about: function(){
        
        console.log(`My name is ${this.firstName} and i am ${this.age} years old`);
    }
}
console.log(this);
person.about();

// dry: dont repeat yourself 