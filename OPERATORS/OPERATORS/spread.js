var obj1 = {
    name:"karthik",
    id: 100,
    city:"gova"                     ///spread operator
};


var obj2 ={
    ...obj1,email:"ukvk@gamil.com",
    city:"hyderabad"
};

console.log(obj2)





var Arr1 = [100,200,300,400];
var Arr2 = [true,false,...Arr1,"karthik"];

console.log(Arr2)