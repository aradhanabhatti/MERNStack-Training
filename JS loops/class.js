// inheritence 
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    about(){
        return `Name is ${this.name}`;
    }
    isFast(){
        return this.age>=2;
    }
    isCute(){
        return true;
    }
}

// const obj1=new Animal("dog",3);
// console.log(obj1);
// console.log(obj1.about());
// console.log(obj1.isCute());
// console.log(obj1.isFast());
// console.log(obj1.name);

// Super keryword is used to acces the properties of parent class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;

    }
    dogSpeed(){
        return `Speed of ${this.name}  is ${this.speed}`
    }

}
const obj1 = new Animal('Tom', 5)
const d1=new Dog("nikky",3,45)
console.log(d1.dogSpeed());
