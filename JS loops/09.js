// method overringing ---- 
class parent{
    fun(){
        console.log("hello");
    }

}
class child extends parent{
    fun(){
        console.log("okk");
    }
}
const obj=new child();
obj.fun();