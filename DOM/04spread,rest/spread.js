var obj1 = {
    name:"s1",
    city:"c1",
    email:"s1@gmail",
};

var obj2 = {
    ...obj1,
    name:"s2"
};

console.log(obj1);
console.log("=====================");
console.log(obj2);







var arr1 = [10,20,30,40,50];

var arr2 = [true,false,...arr1,"karthik","veera"];

console.log(arr1);
console.log("=============");
console.log(arr2);