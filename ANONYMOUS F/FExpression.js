var fn = function (){
    console.log("function expresstion")
};


var f1 = function add(c1){
    console.log("add is called",c1)
    return "hello";
};

fn();
f1(100);