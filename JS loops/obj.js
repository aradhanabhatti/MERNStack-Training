// function ==> function + object

// prototype
// only functions provide prototype properties
function hello(){
    console.log("hello world ");
}

hello();
console.log(hello.name);

hello.lastName="Bhatti";
console.log(hello.lastName);

console.log(hello.prototype);

// hello.about=function(){
//     console.log("this is a function");
// }
// hello.about();

hello.prototype.age=22,
hello.prototype.city="Lahore";
hello.prototype.run=function(){
    console.log("running status");
}
hello.prototype.run()
// object doesnt have prototype 
