import React, { useState } from 'react'

const Update = () => {
  // const[error,setError]=useState();
  // try{
  //   const result=prompt("Are you a developer?")
  //   if(result=='Y'){
  //     throw new Error("A piece of shit")
  //   }
  // }
  // // if asynchronous response to javascript  to json----await.json
  // // use json.parse in rest of the files
  // catch(err){
  //   console.log(err)
  // }
  // finally{
  //   console.log("run no matter what....<><><>");
  // }
  // console.log("check if it runs");
  // {
  //   "name":"Aradhana",
  //   "age":25,
  // }
  const obj={
    name:"Aradhana",
    age:"mortal"
  }
  localStorage.setItem("justAKey",JSON.stringify(obj))
  const value=JSON.parse(localStorage.getItem("justAKey"))
  console.log(value,"value<<>>");
  // removing the item 
console.log(localStorage.removeItem("JustAKey"));
  console.log();
  return (
    <div>
      <span>{}</span>
    </div>
  )
}

export default Update
