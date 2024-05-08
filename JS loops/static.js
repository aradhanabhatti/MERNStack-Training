// static keyword 
// static properties called by using their class name

class abc{
    static name="Aradhana";
    static age=21;
    static fun(a,b){
        console.log("This a static function");
        return a+b;
    }
    static{
        console.log("static block");
        // will show result on top 
    }
}

class xyz extends abc{
    // static fun(){
    //     // console.log("hello this is me.");
    // }
}
// const obj1=new abc();
// console.log(abc.name);
// abc.fun();

xyz.fun(2,3);

// let firstName=abc.name;
// abc.fun(5,2);
// console.log(firstName);
