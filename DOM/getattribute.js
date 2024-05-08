// get and set attribute 

const link1=document.querySelector(".nav-item");
console.log(link1.getAttribute("href"));

const input1=document.querySelector("input");
console.log(input1.getAttribute("type"));


// set attribute 

link1.setAttribute("href","https://react.dev/");
console.log(link1.getAttribute("href"));