// call apply and bind

// function about(){
//     console.log(`${this.firstName},hobby,favsinger`);
// }

const obj1={
    firstName:"Aradhana",
    age:21,
    about:function(){
        // console.log(${this.firstName},);
    }
}

const obj2={
    firstName:"Harsh",
    age:23
}
// call
// about.call(obj1,"yoga","honey singh")
// console.log(obj1);
// apply
// about.apply(obj2,["music","shakira"])
// bind-----return function with same data 
// const myData=about.bind(obj1,"","");
// myData();
