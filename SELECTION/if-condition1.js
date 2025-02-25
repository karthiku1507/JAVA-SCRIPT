
function f1(value){

var x = value;
if (x>15){
    console.log("statement 1");
}

if(x<15){
    console.log("statement 2");
    console.log("statement 3");
    console.log("statement 4");
}
}

f1(30);
console.log("-------------")
f1(10);