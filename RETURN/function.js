function fnreturn(){
    var x = 120;
    return function f1(){
        console.log("i am larthik")
    };
}

var value = fnreturn();
console.log(value);

value();
value();

