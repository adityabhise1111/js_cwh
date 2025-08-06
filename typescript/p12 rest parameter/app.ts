//rest  

function abcd ( ...args : number[]){

    console.log(args)

}

abcd(1,2,3,4,5,6,7,8,9,0)


 // spread operator

let arr1 = [1,2,3];
let arr2 = [...arr1];
let arr3 = [arr1];
console.log(arr2); // [1, 2, 3]
console.log(arr3); // [[1, 2, 3]]
