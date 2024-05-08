// selct elememts using get element by id 

// console.log(window.document);
// console.dir(window.document);

const h1=document.getElementById("hello");
console.log(h1);
h1.style.color="red";
console.log(h1.COMMENT_NODE);

const d1=document.querySelector(".container")
d1.style.border="2px solid";
d1.style.margin="30px";
d1.style.padding="30px";

// select element using query selector---classes 

const h2=document.querySelector(".h1-hello");
h2.style.color="blue";

const hh1=document.querySelector(".nav-item");
hh1.style.color="green";  //it only  takes first item 

// will provide the content 
const heading =document.getElementById("hello");
console.log(heading.textContent);

heading.textContent="hello DOM";
console.log("hello DOM");

const heading2=document.getElementById("para");
heading2.style.color="red";

