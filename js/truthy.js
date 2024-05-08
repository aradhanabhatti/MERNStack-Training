// truthy and falsy value 
// 0, "", undefined, null, false
// truthy----all these values except these 


// let name="Ara";
// if(name){
//     console.log(name);
// }
// else{
//     console.log("false");
// }

// let num=17;
// if(num<18){
//     console.log("teenager");
// }
// else{
//     console.log("Adult");
// }

let w=+prompt("Enter the weather")
if(w<0){
        console.log("freezy");
    }
else if(w>0 && w<=5){
        console.log("too cold");
    }
else if(w>5 && w<=15){
        console.log("cold air");
    }
else if(w>15 && w<=25){
        console.log("normal");
    }
else if(w>25 && w<=16140){
        console.log("moderate");
    }
else if(w>40){
        console.log("too hot");
    }