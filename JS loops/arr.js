arr=[11,0,37,12,0,7]
var n=arr.length;
arr1=[]
count=0;

for(var i=0; i<n; i++){
    if (arr[i]!=0) { 
        arr1.push(arr[i]);
        } 
    else{
        count++;
    }
}

for(let i=0;i<count;i++)
    {
        arr1.push(0);
    }

console.log("original Array: " +arr);
console.log(arr1);

// let i,j;
// arr=[11,0,37,12,0,7]
// for(i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         let c=0;
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]!=0){
//             c++;
//             break;
//         }
//     }

//     if(c!=0){
//         arr[i]=arr[j];
//         arr[j]=0;
//     }
// }
// }


    

