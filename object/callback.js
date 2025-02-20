// function f1 () {
//     console.log("f1 called");
// }
 
// function f2 (x) {
//     console.log("f2 is called");
//     x();
//     x();
    
// }




// f2(function () {
//     console.log("callback is called")
// });




function f1(){
    console.log("f1 is called");
}

function f0(){
    var x=10;
    console.log(x);
    console.log("x");
}

function f2(){
    console.log("f2 is called");
}

f1();
f0();
f2();





function f3(x){
    console.log("f3 is calld");
    x();
    x();
    x();
}

f3(function(){
    console.log("callback function")
});
