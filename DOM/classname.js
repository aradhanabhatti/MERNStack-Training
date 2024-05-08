// METHOD 1: get multiple elements using get element by class name.
// return html collection

// METHOD 2: get multiple elements using get element by query selector
// returns nodelist

//html collection and nodelist 
// array like object--->indexing, length property

// simple for loop working
// for of loop

const navItem=document.getElementsByClassName("nav-item");
console.log(navItem);

console.log(Array.isArray(navItem));

for(let i=0;i<navItem.length;i=i+2){
    console.log(navItem[i]);
    navItem[i].style.color="red";
    // navItem[i].style.backgroundColor="black";

}

for(let i of navItem){
    i.style.fontSize="30px";
    i.style.fontWeight="600";
}

for(let i in navItem){
    // console.log(navItem[i]);
}

const newNavItem=document.querySelectorAll("nav-item")
console.log(newNavItem);

for(let j=0;j<newNavItem.length;j++){
    console.log(newNavItem[j].textContent);
}